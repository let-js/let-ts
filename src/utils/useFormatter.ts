import { map, cloneDeep, forOwn, isFunction } from 'lodash-es'

export default function useFormatter<S, D, F>(
  source: Array<S>,
  Domain: new (...args: any[]) => D,
  formatter?: F,
): Array<D>
export default function useFormatter<S, D, F>(
  source: S,
  Domain: new (...args: any[]) => D,
  formatter?: F,
): D
export default function useFormatter<S, D, F>(
  source: S | S[],
  Domain: new (...args: any[]) => D,
  formatter?: F,
): Array<D> | D {
  if (Array.isArray(source)) {
    const entityArr: Array<D> = map(source, (item) =>
      _getFormatEntity(item, Domain, formatter),
    )
    return entityArr
  } else {
    const entity: D = _getFormatEntity(source, Domain, formatter)
    return entity
  }
}

function _getFormatEntity<S, D, F, K extends keyof D>(
  source: S,
  Domain: new (...args: any[]) => D,
  formatter?: F,
): D {
  const formatEntity = { ...cloneDeep(source), ...({} as D) }
  if (formatter) {
    forOwn(formatter, (value, key) => {
      formatEntity[key as K] = isFunction(value) ? value(source) : value
    })
  }
  return Domain ? new Domain(formatEntity) : formatEntity
}

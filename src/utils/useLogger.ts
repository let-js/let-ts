import { createLogger } from 'vue-logger-plugin'

export default function useLogger(name = '') {
  return createLogger({
    level: import.meta.env.PROD ? 'error' : 'debug',
    callerInfo: true,
    prefixFormat: ({ level, caller }) =>
      caller
        ? `[${level.toUpperCase()}] [${name}] [${caller?.fileName}:${
            caller?.functionName
          }:${caller?.lineNumber}]`
        : `[${level.toUpperCase()}] [${name}]`,
  })
}

import { GenderCh, GenderTitle, Role } from '@/config/userConst'
export type RoleType = 'admin' | 'editor' | 'developer' | 'operator' | 'user'
/**
 * About Domain
 * 1. Data Model Property Settings
 * 2. Model internal data processing
 * 3. Class Model
 */
export class User {
  userId: number
  userName: string
  gender: number
  role: RoleType
  constructor(user: User) {
    this.userId = user.userId
    this.userName = user.userName
    this.gender = user.gender
    this.role = user.role
  }
  static createEmptyUser(): User {
    const user = new User({
      userId: 0,
      userName: '',
      gender: 0,
      genderCh: '',
      genderTitle: '',
      role: 'user',
      roleName: '',
      isLogin: false,
    })
    return user
  }
  get genderCh() {
    return GenderCh[this.gender]
  }
  get genderTitle() {
    return GenderTitle[this.gender]
  }
  get roleName() {
    return Role[this.role]
  }
  get isLogin() {
    return this.userId > 0
  }
}

import { User } from '../domain/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: User.createEmptyUser(),
  }),
  getters: {
    isLogin: (state) => state.user.userId > 0,
  },
  actions: {
    updateUser(user: User) {
      this.user = user
    },
    getUser() {
      return this.user
    },
    removeUser() {
      this.user = User.createEmptyUser()
    },
  },
})

import { auth } from '@/api/userService'

export const authState = {
    auth: false,
}

export const authActions =  {
    async authentication ({ username, password }) {
       return await auth(username, password).then((response) => {
          this.auth = true
          this.setUser(response)
          this.errorMessage = ''
       }).catch(() => {
          this.auth = false
          this.errorMessage = this.message.error.login
       })
    },

    async logout () {
      this.auth = false
    }
}
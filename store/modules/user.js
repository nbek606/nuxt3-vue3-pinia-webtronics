export const userState = {
    user: {}
}

export const userActions =  {
    setUser (userData) {
        this.user = userData
    }
}

export const userGetters = {
    getUser () {
        return this.user
    }
}
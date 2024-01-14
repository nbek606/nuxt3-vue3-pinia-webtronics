export const messageState = {
    message: {
        error: {
            login: "Неверный логин или пароль"
        }
    },
    errorMessage: '',
    successMessage: ''
}

export const messageGetters = {
    getErrorMessage: state => state.errorMessage
}

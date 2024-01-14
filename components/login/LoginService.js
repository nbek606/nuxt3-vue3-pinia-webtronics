export const usernameRules = [
    val => (val && val.length > 0) || 'Пожалуйста, введите свой логин'
]

export const passwordRules = [
    val => (val && val.length > 0) || 'Пожалуйста, введите свой пароль'
]
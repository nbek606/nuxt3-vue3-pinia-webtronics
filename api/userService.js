import users from '@/assets/temp/users.json'

export const auth = async (username, password) => {
    const user = users.find(item => item.username === username && item.password === password)

    return new Promise((resolve, reject) => {
        if (user) {
            resolve(user)
        } else {
            reject('error')
        }
    })
}
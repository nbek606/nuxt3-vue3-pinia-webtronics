import users from '@/assets/temp/users.json'
import tickets from '@/assets/temp/tickets.json'

export const getTicketsByProfileId = (profileId) => {
    return new Promise((resolve) => {
        const newTickets = tickets.map((value) => {
            const user = users.find(item => item.id == profileId)

            if (user) {
                value.user_name = `${user.first_name} ${user.last_name}`
            }
        
            return value
        })
        
        resolve(newTickets)
    })
}

export const getTicketById = (ticketId) => {
    return new Promise((resolve, reject) => {
        const ticket = tickets.find(item => item.id == ticketId)
        const user = users.find(item => item.id == ticket.user_id)

        if (ticket) {
            ticket.user_name = `${user.first_name} ${user.last_name}`
            resolve(ticket)
        } else {
            reject()
        }
    })
}
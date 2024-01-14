import { getTicketsByProfileId, getTicketById  } from '~/api/ticketService'

export const ticketsState = {
    tickets: []
}

export const ticketsActions =  {
    async getTickets () {
        return await getTicketsByProfileId(this.user.id).then((response) => {
            return response
        })
    },

    async getTicketById (ticketId) {
        return await getTicketById(ticketId).then((response) => {
            return response
        })
    }
}

import { authActions, authState } from './modules/auth'
import { userActions, userState, userGetters } from './modules/user'
import { ticketsState, ticketsActions } from './modules/tickets'
import { messageState, messageGetters} from './modules/messages'
 
export const state = {
        ...authState,
        ...userState,
        ...ticketsState,
        ...messageState
}

export const actions = {
        ...authActions,
        ...userActions,
        ...ticketsActions
}

export const getters = {
        ...userGetters,
        ...messageGetters
}

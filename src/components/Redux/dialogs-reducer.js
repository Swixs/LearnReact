const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
   dialogs: [
      { id: 1, name: 'Fankix' },
      { id: 2, name: 'NikitaHi' },
      { id: 3, name: 'Kirill' },
      { id: 4, name: 'Vova' },
      { id: 5, name: 'Vitya' },
   ],
   message: [
      { id: 1, message: 'хз' },
      { id: 2, message: 'ГО дс' },
      { id: 3, message: 'норм' },
      { id: 4, message: 'Офигеть' },
      { id: 5, message: 'Круто' },
   ],
   newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body
         return state
      case SEND_MESSAGE:
         let body = state.newMessageBody
         state.newMessageBody = ''
         state.message.push({ id: 6, message: body })
         return state
      default:
         return state
   }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => {
   return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}

export default dialogsReducer

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
    _state : {
        profilePage: {
            text: [
                { id: 1, text: 'Hello my name Nikita', likes: '15 ♡', foto: "https://img.freepik.com/free-photo/3d-rendering-of-zoom-call-avatar_23-2149556782.jpg" },
                { id: 2, text: 'Do you want work', likes: '3 ♡', foto: "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-an-avatar-in-a-dark-background-with-red-eyes-image_2914141.jpg" },
            ],
            NewTextInput : '',
        },
    
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Fankix' },
                { id: 2, name: 'NikitaHi' },
                { id: 3, name: 'Kirill' },
                { id: 4, name: 'Vova' },
                { id: 5, name: 'Vitya' }
            ],
    
            message: [
                { id: 1, message: 'хз' },
                { id: 2, message: 'ГО дс' },
                { id: 3, message: 'норм' },
                { id: 4, message: 'Офигеть' },
                { id: 5, message: 'Круто' },
            ],
            newMessageBody: "",
        },
    },
    _callSubscriber(){
        console.log('state changed')
    },


    getState(){
        return this._state;
    },  
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 3,
            text: this._state.profilePage.NewTextInput,
            likes: '0 ♡',
            foto: 'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-an-avatar-in-a-dark-background-with-red-eyes-image_2914141.jpg',
        };

        this._state.profilePage.text.push(newPost);
        this._state.profilePage.NewTextInput = '';
        this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.NewTextInput = action.newText;
        this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
        this._state.dialogsPage.newMessageBody = action.body;
        this._callSubscriber(this._state);
    }else if (action.type === SEND_MESSAGE){
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.message.push({id: 6, message: body})
        this._callSubscriber(this._state);
    }
}
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (newText) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: newText }
  
  };

  export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
  
  };

export default store;
window.store = store;

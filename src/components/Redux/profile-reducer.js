const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 3,
            text: state.NewTextInput,
            likes: '0 ♡',
            foto: 'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-an-avatar-in-a-dark-background-with-red-eyes-image_2914141.jpg',
         }
         state.text.push(newPost)
         state.NewTextInput = ''
         return state
      case UPDATE_NEW_POST_TEXT:
         state.NewTextInput = action.newText
         return state
      default:
         return state
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (newText) => {
   return { type: UPDATE_NEW_POST_TEXT, newText: newText }
}

export default profileReducer

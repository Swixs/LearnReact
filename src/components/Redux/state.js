let state = {
    profilePage: {
        text: [
            { id: 1, text: 'Hello my name Nikita', likes: '15 ♡', foto: "https://img.freepik.com/free-photo/3d-rendering-of-zoom-call-avatar_23-2149556782.jpg" },
            { id: 2, text: 'Do you want work', likes: '3 ♡', foto: "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-an-avatar-in-a-dark-background-with-red-eyes-image_2914141.jpg" },
        ],
        NewTextInput: ''
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
        ]
    },
}

export let addPost = (postMessage) => {
    let newText = {
        id: state.profilePage.text.length + 1,
        text: postMessage,
        likes: '0 ♡',
        foto:
            'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-an-avatar-in-a-dark-background-with-red-eyes-image_2914141.jpg',
    };

    if (postMessage === '') {
        console.log('errore')
    } else {
        state.profilePage.text.push(newText);
    }
};



export default state
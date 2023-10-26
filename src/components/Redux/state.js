let state = {
    profilePage: {
        text: [
            { id: 1, text: 'Hello my name Nikita', likes: '15 ♡', foto: "https://img.freepik.com/free-photo/3d-rendering-of-zoom-call-avatar_23-2149556782.jpg" },
            { id: 2, text: 'Do you want work', likes: '3 ♡', foto: "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-an-avatar-in-a-dark-background-with-red-eyes-image_2914141.jpg" },
        ],
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Lola' },
            { id: 2, name: 'NikitaHi' },
            { id: 3, name: 'Kirill' },
            { id: 4, name: 'Vova' },
            { id: 5, name: 'Vitya' }
        ],

        message: [
            { id: 1, message: 'Привет ты как?' },
            { id: 2, message: 'ГО дс' },
            { id: 3, message: 'норм' },
            { id: 4, message: 'Офигеть' },
            { id: 5, message: 'Круто' },
        ]
    },

    friendsIcons: {
        friends: [
            { id: 1, name: "Лолита", foto: "https://scontent-mxp1-1.cdninstagram.com/v/t51.2885-19/380266886_333742279189610_5933607015392094902_n.jpg?stp=dst-jpg_s100x100&_nc_cat=102&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=0W9pBF6cD24AX-ayszh&_nc_oc=AQkG1Lwn9HV7bn-97s3Rtr2nc_V8b4CGpJiGkToXEjgAyF8VKfhu_AZBUrAGuZ6wPZlr-cDkxbzQRXrbF08ysEZi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-mxp1-1.cdninstagram.com&oh=00_AfAA2OyIDsbisKiQfiwitONCS0W8UbJMLxeW1RL3uA3PCQ&oe=653DA3B5" },
            { id: 2, name: "Никита", foto: "https://scontent-mxp1-1.cdninstagram.com/v/t51.2885-19/316122255_664893751762628_191205699289462856_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=vTDBkClqkzUAX_yFgrn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-mxp1-1.cdninstagram.com&oh=00_AfDIzXy0MNSeGogruEb04_kgfCa9ccERcBOIHjlLZeuhUA&oe=653D65BD" },
            { id: 3, name: "Вова", foto: "https://scontent-mxp1-1.cdninstagram.com/v/t51.2885-19/273688174_451778096658026_5221378672830319211_n.jpg?stp=dst-jpg_s100x100&_nc_cat=102&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=6VtMFbPyEPMAX8DbFMK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-mxp1-1.cdninstagram.com&oh=00_AfAdjHX7Ya3JLElqZJxxYE3oRdYOsvCMueyjW4grj_q09Q&oe=653D6608" }
        ],
    },
}

export let addPost = (postMessage) => {
    let newText = {
      id: state.profilePage.text.length + 1, 
      text: postMessage,
      likesCount: 0,
      foto:
        'https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-an-avatar-in-a-dark-background-with-red-eyes-image_2914141.jpg',
    };
  
    state.profilePage.text.push(newText);
  };

export default state
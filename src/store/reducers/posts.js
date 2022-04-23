import { ADD_POST } from "../actions/actionTypes";

const initialState = {
    posts: [
        {
        id: Math.random(),
        nickname: "Rafael Pereira",
        email: 'refael@gmail.com',
        image: require('../../../assets/imgs/bw.jpg'), 
        comments: 
        [
            {
            nickname: 'John Ray Sheldon',
            comment: 'Stunning'
            }, 
            {
                nickname: 'Jana Ana Arrunda',
                comment: 'Foto linda, Onde foi tirada?'
            },
            {
                nickname: 'Bebel Arturia',
                comment: 'Loucura Louca'
            }
        ], 
     },
     {
        id: Math.random(),
        nickname: "Rafael Pereira",
        email: 'refael@gmail.com',
        image: require('../../../assets/imgs/bw.jpg'), 
        comments: 
        [
            {
            nickname: 'Maro',
            comment: 'Estilo'
            }, 
            {
                nickname: 'Jana Ana Arrunda',
                comment: 'Foto linda, Onde foi tirada?'
            },
            {
                nickname: 'Bebel Arturia',
                comment: 'Loucura Louca'
            }
        ], 
     },
     {
        id: Math.random(),
        nickname: "Rafael Pereira",
        email: 'refael@gmail.com',
        image: require('../../../assets/imgs/boat.jpg'), 
        comments: 
        [
            {
            nickname: 'Maro',
            comment: 'Estilo'
            }, 
            {
                nickname: 'Jana Ana Arrunda',
                comment: 'Foto linda, Onde foi tirada?'
            },
            {
                nickname: 'Bebel Arturia',
                comment: 'Loucura Louca'
            }
        ], 
     },
     {
        id: Math.random(),
        nickname: "Rafael Pereira",
        email: 'refael@gmail.com',
        image: require('../../../assets/imgs/gate.jpg'), 
        comments: 
        [
            {
            nickname: 'Maro',
            comment: 'Estilo'
            }, 
            {
                nickname: 'Jana Ana Arrunda',
                comment: 'Foto linda, Onde foi tirada?'
            },
            {
                nickname: 'Bebel Arturia',
                comment: 'Loucura Louca'
            }
        ], 
     }]
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: 
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
            default:
                return state
    }
}

export default reducer
import * as types from '../types'

const initialState = {
    
}

// index,number,value
export default function root(state = initialState,action) {
    switch( action.type){
        case "GET_QUESTION_FULFILLED" : 
            return {
                ...state,
                question:{
                    data:action.payload,
                    loading:false
                }
            }
        case "GET_QUESTION_PENDING" : 
            return {
                ...state,
                question:{
                    data:action.payload,
                    loading:true
                }
            }
        default:
            return state
    }
}

// {
//     "id": 2,
//     "crossword_id": 1,
//     "number": 2,
//     "question": "hewan berkaki dua",
//     "answer": "ayam",
//     "is_clue": false,
//     "indexes": '1,6,11,16'
// },
// {
//     "id": 3,
//     "crossword_id": 1,
//     "number": 3,
//     "question": "hewan yang seperti chandra",
//     "answer": "ampas",
//     "is_clue": false,
//     "indexes": '15,16,17,18,19'
// },
// let ceknum=[]
// data.map((data,index) => {
//     ceknum.includes(item.number) ? ceknum.push(item.number) : nul 
// })



// {index:0,number:1,isClue:false},
//                 {index:1,number:1,isClue:false},
//                 {index:2,number:1,isClue:false},
//                 {index:3,number:1,isClue:false},
//                 {index:4,number:1,isClue:false},
//                 {index:5,number:1,isClue:false},
//                 {index:6,number:3,isClue:false},
//                 {index:7,number:3,isClue:false},
//                 {index:8,number:3,isClue:false},   
//                 {index:0,number:3,isClue:false}





// switch (action.type) {
//     case types.ADD_TODO : 
//         return {
//             ...state,
//             todos : state.todos.concat(action.payload)
//         }
//     case types.EDIT_TODO :
//         const editItem = state.todos.map(item => {
//             if (item.id == action.payload.id){
//                 return action.payload
//             }
//             return item
//         })
//         return {
//             ...state,
//             todos : editItem
//         }
//     case types.DELETE_TODO : 
//         const removeItem = state.todos.filter(item => item.id != action.payload)
//         return {
//             ...state,
//             todos : removeItem
        
//         }
//     default :
//         return state
// }

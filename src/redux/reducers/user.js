const initialState = {
    currentUser:'haiii'
}


export default function root(state = initialState,action) {
    switch( action.type){
        case "SAVE_USER" :
            const {email,name,nohp} = action
            return {
                ...state,
                currentUser:{
                    name,
                    email,
                    nohp
                }
            } 
        default:
            return state
    }
}
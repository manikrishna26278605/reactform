

const initialState = { loginUser : '' }


export default function loginReducer( state={}, action ){

    console.log(action)
    switch(action.type){
 
        case 'LOGIN':
        return { ...state,  login: action.payload }

        default:
         return state;
    }

}
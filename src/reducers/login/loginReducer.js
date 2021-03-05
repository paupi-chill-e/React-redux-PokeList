const initialState = () => {
    user: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_PENDING: return{

        }
        case LOGIN_SUCESS: return{

        }
        case LOGIN_ERROR: return{

        }
        default: return state
    }
}
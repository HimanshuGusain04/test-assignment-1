import { DELETE_USER, LIKE_USER, RECEIVE_API_DATA, REQUEST_API_DATA } from "../actions"

const initialState = {
    users: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case REQUEST_API_DATA:
            state.loading = true
            return Object.assign({}, state)

        case RECEIVE_API_DATA:
            state.users = action.value.map((user) => {return {...user, liked: false}})
            state.loading = false
            return Object.assign({}, state);
            
        case LIKE_USER:
            state.users = state.users.map((user) => user.id === action.id ? {...user, liked : !user.liked} : user)
            return Object.assign({}, state);

        case DELETE_USER:
            state.users = state.users.filter((user) => user.id !== action.id);
            return Object.assign({}, state);

        default:
            return state;
    }
}

export default reducer;
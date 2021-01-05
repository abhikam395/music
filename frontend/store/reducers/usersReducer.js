import { 
    DELETE_USER, 
    GET_USERS, 
    SET_USERS 
} from './../actions/actions-types';

const initialState = {
    users: []
}

export function usersReducer(state = initialState, action){
    switch(action.type){
        case GET_USERS:
            return Object.assign({}, state, { users: state.users})
        case SET_USERS:
            return Object.assign({}, state, {users: action.data.users})
        case DELETE_USER:
            let userId = action.data.id;
            let users = state.users.filter((user) => user.id != userId)
            return Object.assign({}, state, {users: users})
    }
    return state;
}

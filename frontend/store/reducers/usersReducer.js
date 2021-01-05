import { 
    DELETE_USER, 
    ADD_USER, 
    SET_USERS 
} from './../actions/actions-types';

const initialState = {
    users: []
}

export function usersReducer(state = initialState, action){
    switch(action.type){
        case ADD_USER:
            let id = state.users[state.users.length - 1].id;
            let user = Object.assign({}, action.data, {id: id + 1});
            state.users.push(user);
            return Object.assign({}, state);
        case SET_USERS:
            return Object.assign({}, state, {users: action.data.users})
        case DELETE_USER:
            let userId = action.data.id;
            let users = state.users.filter((user) => user.id != userId)
            return Object.assign({}, state, {users: users})
    }
    return state;
}

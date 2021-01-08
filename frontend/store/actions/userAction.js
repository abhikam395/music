import { SET_USERS, ADD_USER, DELETE_USER  } from './actions-types';

export function set(users){
    return {
        type: SET_USERS,
        data: {
            users: users
        }
    }
}

export function add(user){
    return {
        type: ADD_USER,
        data: user
    }
}

export function remove(id){
    return {
        type: DELETE_USER,
        data: {
            id: id
        }
    }
}
import { SET_USERS, GET_USERS, DELETE_USER  } from './actions-types';

export function set(users){
    return {
        type: SET_USERS,
        data: {
            users: users
        }
    }
}

export function get(){
    return {
        type: GET_USERS,
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
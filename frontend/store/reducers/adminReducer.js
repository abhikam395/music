import { GET_ADMIN_SONGS, GET_ADMIN_ARTISTS } from '../actions/actions-types';

import { combineReducers } from 'redux';

const initialState = {
    songs: [],
    artists: [],
}

export function adminSongsReducer(state = initialState, action){
    switch(action.type){
        case GET_ADMIN_SONGS:
            return Object.assign({}, state, {songs: action.data})       
    }
    return state; 
}

export function adminArtistsReducer(state = initialState, action){
    switch(action.type){
        case GET_ADMIN_ARTISTS:
            return Object.assign({}, state, {artists: action.data})       
    }
    return state; 
}

export default combineReducers({adminSongsReducer, adminArtistsReducer});
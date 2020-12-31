import { GET_TOP_SONGS, TIME } from '../actions/actions-types';

const initialState = {
    topSongs: [],
    filter: null
}

export function topSongsReducer(state = initialState, action){
    switch(action.type){
        case GET_TOP_SONGS:
            return Object.assign({}, state, { topSongs: action.data, filter: action.filter })
    }
    return state;
}
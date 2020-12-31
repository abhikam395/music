import { 
    GET_TOP_SONGS, 
    GET_RECOMMENDED_ALBUMS, 
    GET_RECENT_PLAYLIST,
    SET_CURRENT_SONG
} from '../actions/actions-types';

/**
 * initial state
 */
const initialState = {
    topSongs: [],
    recentPlaylist: [],
    recommendedAlbums: [],
    currentSong: null,
    filter: null
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export function songsReducer(state = initialState, action){
    switch(action.type){
        case GET_TOP_SONGS:
            return Object.assign({}, state, { topSongs: action.data, filter: action.filter })
        case GET_RECOMMENDED_ALBUMS:
            return Object.assign({}, state, {recommendedAlbums: action.data })
        case GET_RECENT_PLAYLIST: 
            return Object.assign({}, state, {recentPlaylist: action.data })
        case SET_CURRENT_SONG:
            return Object.assign({}, state, {currentSong: action.data})     
    }
    return state;
}
import {
    SET_CURRENT_SONG, 
    GET_RECENT_PLAYLIST, 
    GET_RECOMMENDED_ALBUMS, 
    GET_TOP_SONGS 
} from './actions-types';

export function topSong(songs, filter){
    return {
        type: GET_TOP_SONGS,
        filter: filter,
        data: songs
    }
}

export function recommendedAlbum(albums){
    return {
        type: GET_RECOMMENDED_ALBUMS,
        data: albums
    }
}

export function recentPlaylist(songs){
    return {
        type: GET_RECENT_PLAYLIST,
        data: songs
    }
}

export function setCurrentSong(song){
    return {
        type: SET_CURRENT_SONG,
        data: song
    }
}
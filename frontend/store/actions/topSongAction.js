import {GET_TOP_SONGS } from './actions-types';

export function getTopSong(songs, filter){
    return {
        type: GET_TOP_SONGS,
        filter: filter,
        data: songs
    }
}
import { GET_ADMIN_SONGS } from './actions-types';

export function get(songs){
    return {
        type: GET_ADMIN_SONGS,
        data: songs
    }
}

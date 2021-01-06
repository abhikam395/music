import { GET_ADMIN_ARTISTS } from './actions-types';

export function get(artists){
    return {
        type: GET_ADMIN_ARTISTS,
        data: artists
    }
}

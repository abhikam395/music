import { GET_RECOMMENDED_ALBUMS } from './actions-types';

export  function getRecommendationAlbums(albums){
    return {
        type: GET_RECOMMENDED_ALBUMS,
        data: albums
    }
}
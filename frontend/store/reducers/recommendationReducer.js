import { GET_RECOMMENDED_ALBUMS } from '../actions/actions-types';

const initialState = {
    albums: []
}

export function recommendationReducer(state = initialState, action){
    switch(action.type){
        case GET_RECOMMENDED_ALBUMS:
            return Object.assign({}, state, {albums: action.data })
    }
    return state;
}
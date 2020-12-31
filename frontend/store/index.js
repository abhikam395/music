import { createStore, combineReducers } from 'redux';
import {homeReducer} from './reducers/homeReducer';
import {recommendationReducer } from './reducers/recommendationReducer';
import { topSongsReducer } from './reducers/topSongsReducer';

const reducers = combineReducers({
    homeState: homeReducer,
    recommendationAlbumState: recommendationReducer,
    topSongsState: topSongsReducer
})

export default createStore(reducers);
import { createStore, combineReducers } from 'redux';
import { homeReducer} from './reducers/homeReducer';
import { songsReducer } from './reducers/songsReducer';

const reducers = combineReducers({
    songsState: songsReducer,
    homeState: homeReducer
})

export default createStore(reducers);
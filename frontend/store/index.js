import { createStore, combineReducers } from 'redux';
import { homeReducer} from './reducers/homeReducer';
import { songsReducer } from './reducers/songsReducer';
import { usersReducer } from './reducers/usersReducer';

const reducers = combineReducers({
    songsState: songsReducer,
    homeState: homeReducer,
    userState: usersReducer
})

export default createStore(reducers);
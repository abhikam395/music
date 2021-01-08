import { createStore, combineReducers } from 'redux';
import { homeReducer} from './reducers/homeReducer';
import { songsReducer } from './reducers/songsReducer';
import { usersReducer } from './reducers/usersReducer';
import AdminReducer from './reducers/adminReducer';

const reducers = combineReducers({
    songsState: songsReducer,
    homeState: homeReducer,
    userState: usersReducer,
    adminState: AdminReducer
})

export default createStore(reducers);
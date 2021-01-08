import { GET_HOME_MENUS } from '../actions/actions-types';

const initialState = {
    menu: [],
    libraryMenu: [],
    favoriteMenu: []
}


export function homeReducer(state = initialState, action){
    switch(action.type){
        case GET_HOME_MENUS:
            return Object.assign({}, state, { 
                menu: action.data.menu, 
                libraryMenu: action.data.libraryMenu, 
                favoriteMenu: action.data.favoriteMenu})       
    }
    return state; 
}
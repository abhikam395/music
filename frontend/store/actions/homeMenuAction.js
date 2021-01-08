import { GET_HOME_MENUS } from './actions-types';

export function getHomeMenus(data){
    return {
        type: GET_HOME_MENUS,
        data: data
    }
}
import store from '../frontend/store';
import { getHomeMenus } from '../frontend/store/actions/homeMenuAction';

import { 
    Home, 
    Search, 
    FavoriteBorder, 
    Radio, 
    Person, 
    MusicNote, 
    FiberManualRecord, 
    Album } 
    from '@material-ui/icons';

const data = { 
    menu: [{name: 'Home', icon: Home}, {name: 'Browse', icon: Search}, 
        {name: 'Radio', icon: Radio}, {name: 'Favorites', icon: FavoriteBorder}
    ],
    libraryMenu: [{name: 'Artists', icon: Person}, {name: 'Songs', icon: MusicNote}, {name: 'Album', icon: Album}],
    favoriteMenu: [{name: 'Believer', icon: FiberManualRecord}, {name: 'Sorry', icon: FiberManualRecord}]
};


export function getMenus(){
    store.dispatch(getHomeMenus(data))
}
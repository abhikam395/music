import store from './../frontend/store';
import { getTopSong } from './../frontend/store/actions/topSongAction';
import { TIME } from './../frontend/store/actions/actions-types';

const songs = [
    {name: 'Kill me', singer: 'Justin bieber', duration: '3:32', isPlaying: false, isFavorite: false,
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
        {name: 'Kill me', singer: 'Justin bieber', duration: '3:32', isPlaying: false, isFavorite: false,
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
        {name: 'Kill me', singer: 'Justin bieber', duration: '3:32', isPlaying: false, isFavorite: false,
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
        {name: 'Kill me', singer: 'Justin bieber', duration: '3:32', isPlaying: true, isFavorite: false,
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
        {name: 'Kill me', singer: 'Justin bieber', duration: '3:32', isPlaying: false, isFavorite: false,
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
        {name: 'Kill me', singer: 'Justin bieber', duration: '3:32', isPlaying: false, isFavorite: false,
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
        {name: 'Kill me', singer: 'Justin bieber', duration: '3:32', isPlaying: true, isFavorite: false,
        image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
]

export function getTopSongs(){
    store.dispatch(getTopSong(songs, TIME.TODAY))
}
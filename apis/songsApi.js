import store from '../frontend/store';
import { topSong, recommendedAlbum, recentPlaylist } from '../frontend/store/actions/songsAction';
import { TIME } from '../frontend/store/actions/actions-types';

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

const albums = [ 
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
    {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
]

const recentSongs = [
    {name: 'Let me love you', duration: '4:13', isPlaying: false, singer: 'Justin',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
    {name: 'Let me love you', duration: '4:13', isPlaying: false, singer: 'Justin',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
    {name: 'Let me love you', duration: '4:13', isPlaying: false, singer: 'Justin',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
    {name: 'Let me love you', duration: '4:13', isPlaying: false, singer: 'Justin',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
    {name: 'Let me love you', duration: '4:13', isPlaying: false, singer: 'Justin',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
]


export function getTopSongs(){
    store.dispatch(topSong(songs, TIME.TODAY))
}

export function getRecommendedAlbums(){
    store.dispatch(recommendedAlbum(albums))
}

export function getRecentPlaylist(){
    store.dispatch(recentPlaylist(recentSongs))
}
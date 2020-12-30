import React, { Component } from 'react';
import './songslist.scss';

import Loadable from 'react-loadable';
import LoadingComponent from '../../components/LoadingComponent';

const SongItem  = Loadable({
    loader: () => import('./SongItem'),
    loading(){
        return <LoadingComponent/>
    }
})

export default class SongsList extends Component{
    constructor(){
        super();
        this.state = {
            songs: [
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
        }
    }

    getSongList(songs){
        return songs.map((song, index) => this.getSongItem(song, index));
    }

    getSongItem(song, index){
        return <SongItem key={index} song={song}/>
    }


    render(){
        return(
            <ul className="songs__list">
                {this.getSongList(this.state.songs)}
            </ul>
        )
    }
}

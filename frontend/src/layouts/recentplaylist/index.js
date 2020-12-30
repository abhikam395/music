import React, { Component } from 'react';
import './index.scss';

import Loadable from 'react-loadable';
import LoadingComponent from '../../components/LoadingComponent';

const PlaylistSong = Loadable({
    loader: () => import('./PlaylistSong'),
    loading(){
        return <LoadingComponent/>
    }
})

export default class RecentPlayList extends Component{

    constructor(){
        super();
        this.state = {
            recentSongs: [
                {name: 'Let me love you', duration: '4:13', isPlaying: false, 
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
                {name: 'Let me love you', duration: '4:13', isPlaying: false, 
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
                {name: 'Let me love you', duration: '4:13', isPlaying: false, 
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
                {name: 'Let me love you', duration: '4:13', isPlaying: false, 
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
                {name: 'Let me love you', duration: '4:13', isPlaying: false, 
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'},
            ]
        }
    }

    getRecentPlaylist(playlist){
        return playlist.map((song, index) => this.getPlaylistItem(song, index))
    }

    getPlaylistItem(song, index){
        return <PlaylistSong key={index} song={song}/>
    }

    render(){
        return (
            <div>
                <h3>Recent Playlist</h3>
                <ul className="recent__songs recent__songs--size">
                    {this.getRecentPlaylist(this.state.recentSongs)}
                </ul>
            </div>
        )
    }
}
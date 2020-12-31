import React, { Component } from 'react';
import './songslist.scss';

import Loadable from 'react-loadable';
import LoadingComponent from '../../components/LoadingComponent';
import { connect } from 'react-redux';

import { getTopSongs } from './../../../../apis/topSongsApi';

const SongItem  = Loadable({
    loader: () => import('./SongItem'),
    loading(){
        return <LoadingComponent/>
    }
})

class SongsList extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        getTopSongs();
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
                {this.getSongList(this.props.songs)}
            </ul>
        )
    }
}

const mapStateToProps  = function(store){
    return {
        songs: store.topSongsState.topSongs
    }
}

export default connect(mapStateToProps)(SongsList);

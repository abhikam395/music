import React, { Component } from 'react';
import './songslist.scss';

import Loadable from 'react-loadable';
import LoadingComponent from '../../components/LoadingComponent';
import { connect } from 'react-redux';

import { setCurrentSong } from './../../../store/actions/songsAction';
import { getTopSongs } from './../../../../apis/songsApi';

const SongItem  = Loadable({
    loader: () => import('./SongItem'),
    loading(){
        return <LoadingComponent/>
    }
})

class SongsList extends Component{

    componentDidMount(){
        getTopSongs();
    }

    getSongList(songs){
        return songs.map((song, index) => this.getSongItem(song, index));
    }

    getSongItem(song, index){
        return <SongItem key={index} song={song} setCurrentSong={this.props.setCurrentSong}/>
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
        songs: store.songsState.topSongs
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        setCurrentSong: function(song){
            dispatch(setCurrentSong(song))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsList);

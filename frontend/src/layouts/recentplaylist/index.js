import React, { Component } from 'react';
import './index.scss';

import Loadable from 'react-loadable';
import LoadingComponent from '../../components/LoadingComponent';
import { connect } from 'react-redux';
import { getRecentPlaylist } from './../../../../apis/songsApi';

import { setCurrentSong } from './../../../store/actions/songsAction';

/**
 * PlaylistSong component
 */
const PlaylistSong = Loadable({
    loader: () => import('./PlaylistSong'),
    loading(){
        return <LoadingComponent/>
    }
})

/**
 * component class
 */
class RecentPlayList extends Component{

    componentDidMount(){
        getRecentPlaylist();
    }

    getRecentPlaylist(playlist){
        return playlist.map((song, index) => this.getPlaylistItem(song, index))
    }

    getPlaylistItem(song, index){
        return <PlaylistSong key={index} song={song} setCurrentSong={this.props.setCurrentSong}/>
    }

    render(){
        return (
            <div>
                <h3>Recent Playlist</h3>
                <ul className="recent__songs recent__songs--size">
                    {this.getRecentPlaylist(this.props.recentPlaylist)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = function(store){
    return {
        recentPlaylist: store.songsState.recentPlaylist
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        setCurrentSong: function(song){
            dispatch(setCurrentSong(song))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentPlayList)
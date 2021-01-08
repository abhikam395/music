import React, { Component } from 'react';
import './recommendationalbums.scss';

import { getRecommendedAlbums } from '../../../../apis/songsApi';
import { connect } from 'react-redux';

import { setCurrentSong } from '../../../store/actions/songsAction';

class RecommendationAlbumsLayout extends Component{

    componentDidMount(){
        getRecommendedAlbums();
    }

    getAlbumsList(albums){
        return albums.map((album, index) => this.getAlbumItem(album, index))
    }

    getAlbumItem(album, index){
        return  <li className="album album--size" 
                key={index} onClick={this.props.setCurrentSong.bind(this, album)}>
                    <img src={album.image} className="album__image album__image--size"/>
                    <h4 className="album__name">{album.name}</h4>
                    <h5 className="album__singer">{album.singer}</h5>
                </li>   
    } 

    render(){
        return(
            <div className="container container--size center">
                <h2>Recommended Albums</h2>
                <ul className="albums albums--size">
                    { this.getAlbumsList(this.props.albums)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = function(store){
    return {
        albums: store.songsState.recommendedAlbums
    }
}   

const mapDispatchToProps = function(dispatch){
    return {
        setCurrentSong: function(song){
            dispatch(setCurrentSong(song))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationAlbumsLayout);

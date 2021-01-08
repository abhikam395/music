import React, { Component } from 'react';
import './playlistsong.scss';

import { FavoriteBorder } from '@material-ui/icons';
import image from './../../../../backend/public/images/red.png'

export default class PlaylistSong extends Component{

    render(){

        let { song, key, setCurrentSong } = this.props;

        return(
            <li className="recent-song recent-song--size" 
                key={key} 
                onClick={setCurrentSong.bind(this, song)}>
                <img src={image} 
                    className="recent-song__image recent-song__image--size"/>
                <div className="recent-song__info recent-song__info--size">
                    <h5>{song.name}</h5>
                    <div className="recent-song__right">
                        <FavoriteBorder fontSize="small"/>
                        <span className="recent-song__duration">{song.duration}</span>
                    </div>
                </div> 
            </li>
        )
    }
} 

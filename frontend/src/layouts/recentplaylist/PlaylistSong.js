import React, { Component } from 'react';
import './playlistsong.scss';

import { FavoriteBorder } from '@material-ui/icons';
import image from './../../../../backend/public/images/red.png'

export default class PlaylistSong extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <li className="recent-song recent-song--size" key={this.props.key}>
                <img src={image} 
                    className="recent-song__image recent-song__image--size"/>
                <div className="recent-song__info recent-song__info--size">
                    <h5>{this.props.song.name}</h5>
                    <div className="recent-song__right">
                        <FavoriteBorder fontSize="small"/>
                        <span className="recent-song__duration">{this.props.song.duration}</span>
                    </div>
                </div> 
            </li>
        )
    }
} 

import React, { Component } from 'react';
import './musicplayer.scss';

import { 
    SkipNext, 
    SkipPrevious, 
    PlayCircleFilled, 
    VolumeUp, 
    FavoriteBorder, 
    Repeat, 
    Fullscreen 
} from '@material-ui/icons';

export default class MusicPlayerComponent extends Component{

    constructor(){
        super();
        this.state = {
            song: {
                name: 'Shape of you',
                singer: 'Ed-Sheeran',
                currentPlay: '2:30',
                totalPlay: '6:00'
            }
        }
    }

    render(){
        let {name, singer, currentPlay, totalPlay} = this.state.song;


        return(
            <div className="music-player music-player--size music-player--theme">
                <div className="music-player__left">
                    <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" 
                        className="music-player__image"/>
                    <div className="music-player__info">
                        <h4 className="music-player__songname">{name}</h4>
                        <h5 className="music-player__singer">{singer}</h5>
                    </div>    
                </div>
                <div className="music-player__center">
                    <SkipPrevious id="music-player__previous"/>
                    <PlayCircleFilled id="music-player__play-pause"/>
                    <SkipNext id="music-player__next"/>
                    <div className="music-player__songcontroller">
                        <span>{currentPlay}</span>
                        <input type="range" 
                            min="1" 
                            max="100" 
                            // value="50" 
                            id="music-player__song-slider"/>
                        <span>{totalPlay}</span>    
                    </div>

                </div>    
                <div className="music-player__right">
                    <VolumeUp id="music-player__volume"/>
                    <input type="range" 
                            min="1" 
                            max="100" 
                            // value="50" 
                            id="music-player__voice-slider"/>
                    <FavoriteBorder id="music-player__favorite"/>
                    <Repeat id="music-player__repeat"/>
                    <Fullscreen id="music-player__fullscreen"/>
                </div>
            </div>
        )
    }
}
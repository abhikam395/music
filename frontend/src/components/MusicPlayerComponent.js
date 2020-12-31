import React, { Component } from 'react';
import './musicplayer.scss';

import { connect } from 'react-redux';
import FullScreenComponent from './FullScreenComponent';

import { 
    SkipNext, 
    SkipPrevious, 
    PlayCircleFilled, 
    VolumeUp, 
    FavoriteBorder, 
    Repeat, 
    Fullscreen 
} from '@material-ui/icons';

class MusicPlayerComponent extends Component{

    constructor(){
        super();
        this.state = {
            fullScreenMode: false
        }

        document.addEventListener('keyup', (e) => {
            if(e.keyCode == 27)
                this.setState({
                    fullScreenMode: false
                })
        })
    }

    fullScreenModeOn(){
        this.setState({
            fullScreenMode: true
        })
    }

    fullScreenModeOff(status){
        this.setState({
            fullScreenMode: !status
        })
    }

    render(){
        if(!this.props.currentSong)
            return <div></div> 
        else if (this.state.fullScreenMode)
            return <FullScreenComponent 
                    song={this.props.currentSong} 
                    listener={this.fullScreenModeOff.bind(this)}/>

        let {name, singer, duration, isPlaying, image } = this.props.currentSong;

        return(
            <div className="music-player music-player--size music-player--theme">
                <div className="music-player__left">
                    <img src={image} 
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
                        <span>0:0</span>
                        <input type="range" 
                            min="1" 
                            max="100" 
                            // value="50" 
                            id="music-player__song-slider"/>
                        <span>{duration}</span>    
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
                    <Fullscreen id="music-player__fullscreen" 
                        onClick={this.fullScreenModeOn.bind(this)}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(store){
    console.log(store.songsState.currentSong)
    return{
        currentSong: store.songsState.currentSong
    }
}

export default connect(mapStateToProps)(MusicPlayerComponent);
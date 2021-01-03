import React, { Component } from 'react';
import './musicplayer.scss';

import { connect } from 'react-redux';
import FullScreenComponent from './FullScreenComponent';
import { getTimeInMin } from './../../utils/getTimeInMin';

import { 
    SkipNext, 
    SkipPrevious, 
    PlayCircleFilled, 
    VolumeUp, 
    FavoriteBorder, 
    Repeat, 
    Fullscreen,
    PauseCircleFilled,
    VolumeOff,
    RepeatOne
} from '@material-ui/icons';

class MusicPlayerComponent extends Component{

    constructor(){
        super();
        this.state = {
            isPlaying: false,
            audio: null,
            duration: '00:00',
            currentTime: '00:00',
            audioElement: null,
            value: 0,
            max: 0,
            maxVolume: 1,
            minVolume: 0,
            currentVoume: 0.5,
            previousVolume: 0,
            volumePause: false,
            repeat: false
        }
        this.onPlay = this.onPlay.bind(this);
    }

    componentDidMount(){
        let url = './../../../backend/public/song.mp3';
        this.setState({ isPlaying: true, audio: new Audio(url)});
        setTimeout(() => {
            let round =  Math.round(this.state.audio.duration);
            this.setState({max: round})
            this.onPlay();
        }, 500)
    }

    onPause(){
        this.setState({ isPlaying: false })
        this.state.audio.pause();
    }

    onPlay(){
        let audio = this.state.audio;
        this.setState({ 
            isPlaying: true, 
            duration: getTimeInMin(Math.round(audio.duration)), 
        });
        audio.play();
        setInterval(() => {
            let round = Math.round(audio.currentTime);
            let currentTime = getTimeInMin(round)
            this.updateTextInput(round)
            this.setState({ currentTime: currentTime})
        }, 1000)
    }

    onSoundPause(){
        let audio = this.state.audio;
        this.setState({previousVolume: audio.volume});
        audio.volume = 0;
        this.setState({volumePause: true})
    }

    onSoundPlay(){
        let audio = this.state.audio;
        let previousVolume = this.state.previousVolume;;
        audio.volume = previousVolume;
        this.setState({volumePause: false})
    }

    onSoundChange(){
        let sound = document.getElementById('music-player__voice-slider');
        let audio = this.state.audio;
        audio.volume = sound.value/100;
    }

    updateTextInput(val) {
        this.setState({value: val})
    }

    toggerSongStateIcon(isPlaying){
        
        if(isPlaying)
            return <PauseCircleFilled id="music-player__play-pause" onClick={this.onPause.bind(this)}/>
        else
            return <PlayCircleFilled id="music-player__play-pause" onClick={this.onPlay.bind(this)}/>
    }

    changeVolumeIcon(volumePause){
        if(volumePause)
            return <VolumeOff id="music-player__play-pause" onClick={this.onSoundPlay.bind(this)}/>
        else
            return <VolumeUp id="music-player__play-pause" onClick={this.onSoundPause.bind(this)}/>
    }

    repeatSong(repeat){
        if(repeat)
            return <RepeatOne id="music-player__repeat" onClick={this.onRepeatOne.bind(this)}/>
        else  
            return <Repeat id="music-player__repeat" onClick={this.onRepeat.bind(this)}/>  
    }

    onAudioValueChange(e){
        let value = e.target.value;
        this.setState({value: value})
        let audio = this.state.audio;
        audio.fastSeek(value)
        audio.play(); 
    }

    onRepeat(){
        let audio = this.state.audio;
        audio.loop = true;
        this.setState({ repeat: true})
    }

    onRepeatOne(){
        let audio = this.state.audio;
        audio.loop = false;
        this.setState({ repeat: false})
    }

    onPreviousSong(){
        let audio = this.state.audio;
        audio.load();
        audio.play();
    }

    onNextSong(){
        let audio = this.state.audio;
        audio.load();
        audio.play();
    }

    render(){
        if(!this.props.currentSong) return <div></div>

        else if (this.state.fullScreenMode)
            return <FullScreenComponent 
                    song={this.props.currentSong} 
                    onClick={this.fullScreenModeOff.bind(this)}/>

        let {name, singer, duration, image } = this.props.currentSong;
        let isPlaying = this.state.isPlaying;
        let volumePause = this.state.volumePause;
        let repeat = this.state.repeat;
        
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
                    <SkipPrevious id="music-player__previous" 
                        onClick={this.onPreviousSong.bind(this)}/>
                    {this.toggerSongStateIcon(isPlaying)}
                    <SkipNext id="music-player__next" onClick={this.onNextSong.bind(this)}/>
                    <div className="music-player__songcontroller">
                        <span>{this.state.currentTime}</span>
                        <input type="range" 
                            id="music-player__song-slider"
                            min="0"
                            max={this.state.max}
                            value={this.state.value}
                            onChange={this.onAudioValueChange.bind(this)}/>
                        <span>{this.state.duration}</span>    
                    </div>

                </div>    
                <div className="music-player__right">
                    {this.changeVolumeIcon(volumePause)}
                    <input type="range" 
                            min="0" 
                            max="100"
                            id="music-player__voice-slider"
                            onChange={this.onSoundChange.bind(this)}/>
                    <FavoriteBorder id="music-player__favorite"/>
                    {this.repeatSong(repeat)}
                    <Fullscreen id="music-player__fullscreen" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(store){
    return{
        currentSong: store.songsState.currentSong
    }
}

export default connect(mapStateToProps)(MusicPlayerComponent);
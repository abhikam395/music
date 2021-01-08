import React, { Component } from 'react';
import './songitem.scss';

import { FavoriteBorder, Favorite, PlayArrow, Stop } from '@material-ui/icons';

export default class SongItem extends Component{

    constructor(props){
        super(props)
        this.state = {
            song: this.props.song
        }
        this.songStateChange = this.songStateChange.bind(this);
        this.selectOrRemoveFromFavorite = this.selectOrRemoveFromFavorite.bind(this);
    }

    songStateChange(){
        let { isPlaying } = this.state.song;
        
        this.setState({
            song: Object.assign({}, this.state.song, {isPlaying: !isPlaying})
        })
    }

    selectOrRemoveFromFavorite(){
        let { isFavorite } = this.state.song;
        this.setState({
            song: Object.assign({}, this.state.song, {isFavorite: !isFavorite})
        })
        
    }

    render(){
        let {image, name, singer, duration, isPlaying, isFavorite} = this.state.song;
        let context = this;

        function returnSongStateIcon(){
            if(isPlaying){
                return <Stop className="song__play" 
                        onClick={context.songStateChange}/>
            }
            return <PlayArrow className="song__play" 
                    onClick={context.songStateChange}/>    
        }

        function returnFavoriteIcon(){
            if(isFavorite){
                return <FavoriteBorder className="song__favorite" 
                    onClick={context.selectOrRemoveFromFavorite}/>
            }
            return <Favorite className="song__favorite" 
                onClick={context.selectOrRemoveFromFavorite}/>    
        }
        

        return(
            <li className="song__item song__item--size song__item--theme" 
                key={this.props.key}
                onClick={this.props.setCurrentSong.bind(this, this.props.song)}>
                <img src={image} className="song__image"/>
                <div>
                    <h5 className="song__name">{name}</h5>
                    <h5 className="song__singer">{singer}</h5>
                </div>
                <div className="song__right">
                    <span className="song__duration">{duration}</span>
                    {returnSongStateIcon()}
                    {returnFavoriteIcon()}
                </div>
            </li>
        )
    }
}
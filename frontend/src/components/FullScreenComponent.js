import React, { Component} from 'react';
import "./fullscreen.scss";

import { toogleFullScreen } from '../../utils/musicplayer/fullScreenManager';

export default class FullScreenComponent extends Component{

    componentDidMount(){
        this.fullScreenOn();
    }

    fullScreenOn(){
        let element = document.getElementById('fullscreenImage');
        toogleFullScreen(element, this.props.listener);
    }

    render(){
        let { image } = this.props.song;

        return(
            <img src={image}
                className="fullscreen__image fullscreen__image--size" id="fullscreenImage"/>
        )
    }
}

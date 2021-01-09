import React, { Component } from 'react';

import Wave from "@foobar404/wave";

let wave = new Wave();
let options = {type:"bars"};

// import './../../../backend/public/song.mp3';

// wave.fromElement(document.getElementById(audio),"tutorial", options);


export default class Target extends Component{

    constructor(){
        super();
        this.run  = this.run.bind(this);
    }

    componentDidMount(){
        this.run();
    }

    run(){
        let audio = document.getElementById('audio');
        console.log(audio)
        wave.fromFile("./../../../backend/public/song.mp3",{type:"wave"});
        wave.onFileLoad = (image) => {
            console.log(image)
        }
    }

    render(){

        
        return (
            <div id="name">
                 <audio id="audio"
                    controls
                    src="./../../../backend/public/song.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                </audio>
                <canvas id="tutorial" width="1050" height="1500"></canvas>
            </div>
        )
    }
}
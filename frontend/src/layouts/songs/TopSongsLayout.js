import React, { Component } from 'react';
import './topsongs.scss';

import Loadable from 'react-loadable';
import LoadingComponent from '../../components/LoadingComponent';

const SongsTimeOptions = Loadable({
    loader: () => import('./SongsTimeOption'),
    loading(){
        return <LoadingComponent/>
    }
})

const SongsList = Loadable({
    loader: () => import('./SongsList'),
    loading(){
        return <LoadingComponent/>
    }
})


export default class TopSongsLayout extends Component{

    render(){
        return (
            <div className="center topsongs topsongs--size">
                <div className="topsongs__header">
                    <h3>Top Songs</h3>
                    <SongsTimeOptions/>
                </div>
                <SongsList/>
            </div>
        )
    }
}
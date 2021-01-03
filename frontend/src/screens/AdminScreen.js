import React, { Component } from 'react';
import './admin.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MenuLayout from './../layouts/admin/MenuLayout';

import UserScreen from './UserScreen';
import SongsScreen from './SongScreen';
import ArtistScreen from './ArtistScreen';
import TopSongsScreen from './TopSongScreen';
import RecentSongScreen from './RecentSongScreen';
import RecommendedSongsScreen from './RecommendedSongsScreen';


export default class AdminScreen extends Component{
    constructor(){
        super();
        console.log('AdminScreen')
    }

    render(){
        return (
            <div className="admin">
               <Switch>
                        <Route path="" component={UserScreen}/>
                        <Route path="/songs" component={SongsScreen}/>
                        <Route path="/artist" component={ArtistScreen}/>
                        <Route path="/topsongs" component={TopSongsScreen}/>
                        <Route path="/recentsongs" component={RecentSongScreen}/>
                        <Route path="/recommendedsong" component={RecommendedSongsScreen}/>
                    </Switch>
            </div>    
        )
    }
}
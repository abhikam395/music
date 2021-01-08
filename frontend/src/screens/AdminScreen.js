import React, { Component } from 'react';
import './admin.scss';

import MenuLayout from '../layouts/admin/MenuLayout';

import UserScreen from './UserScreen';
import SongsScreen from './SongScreen';
import ArtistScreen from './ArtistScreen';
import ErrorScreen from './ErrorScreen';
import { types } from './../../utils/menuTypes';

export default class AdminScreen extends Component{
    constructor(){
        super();
        this.state={
            currentMenuItem: types.USERS
        }
    }

    renderView(type){
        if(type == types.USERS)
            return <UserScreen/>
        else if(type == types.SONGS)
            return <SongsScreen/>
        else if(type == types.ARTISTS)
            return <ArtistScreen/>
        else return <UserScreen/>
    }

    onMenuChange(menu){
        this.setState({currentMenuItem: menu })
    }

    render(){
        let { currentMenuItem } = this.state;

        return (
            <div className="admin admin--size">
                <MenuLayout listener={this.onMenuChange.bind(this)}/>
                {this.renderView(currentMenuItem)}
            </div>    
        )
    }
}
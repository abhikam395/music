import React, { Component, Fragment } from 'react';
import './menuhome.scss'

import { 
    Home, 
    Search, 
    FavoriteBorder, 
    Radio, 
    Person, 
    MusicNote, 
    FiberManualRecord, 
    Album } 
    from '@material-ui/icons';

export default class MenuHomeLayout extends Component{

    constructor(){
        super();
        this.state = { 
            menus: [{name: 'Home', icon: Home}, {name: 'Browse', icon: Search}, 
                {name: 'Radio', icon: Radio}, {name: 'Favorites', icon: FavoriteBorder}
            ],
            libraryMenus: [{name: 'Artists', icon: Person}, {name: 'Songs', icon: MusicNote}, {name: 'Album', icon: Album}],
            yourFavorites: [{name: 'Believer', icon: FiberManualRecord}, {name: 'Sorry', icon: FiberManualRecord}]
    };
        // this.getMenus = this.getMenus.bind(this);
    }

    getMenus(menus){
        return menus.map((menu, index) => {
            return this.getMenuItem(menu, index);
        });
    }

    getMenuItem(menu, index){
        let Icon = menu.icon;
        return <li className="menu__item" key={index}>
                <Icon className="menu__icon"></Icon>
                <span>{menu.name}</span>
            </li>
    }

    render(){
        
       return (
           <div className="menu menu--size menu--theme">
               <h1>Music</h1>
               <ul className="menu__list">
                   { this.getMenus(this.state.menus)}
               </ul>
               <h5 className="menu__label">YOUR LIBRARY</h5>
               <ul className="menu__list">
                   { this.getMenus(this.state.libraryMenus)}
               </ul>
               <h5 className="menu__label">YOUR FAVORITES</h5>
               <ul className="menu__list">
                   { this.getMenus(this.state.yourFavorites)}
               </ul>
           </div>
       )
    }
}
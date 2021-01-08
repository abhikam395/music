import React, { Component } from 'react';
import './navbarmenu.scss';

import { Settings, Notifications } from '@material-ui/icons';

export default class NavbarMenuComponent extends Component{

    constructor(){
        super();
        this.state = {
            menus: [
                {name: 'Notifications', icon: Notifications},
                {name: 'Settings', icon: Settings}
            ]
        }
    }

    getMenus(menus){
        return menus.map((menu, index) => this.getMenuItem(menu, index));
    }

    getMenuItem(menu, index){
        let Icon = menu.icon;
        return  <li key={index} className="navbar__menu">
                    <Icon></Icon>
                </li>
    }

    render(){
        return(
            <div className className="navbar__left">
                <ul className="navbar__menus">
                    { this.getMenus(this.state.menus) }
                </ul>
                <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" 
                    className="navbar__profile navbar__profile--size"/>
            </div>
        )
    }
}




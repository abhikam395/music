import React, { Component, Fragment } from 'react';
import './menu.scss';

import { types } from './../../../utils/menuTypes';

export default class MenuLayout extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: [
                {name: 'Users', type: types.USERS},
                {name: 'Songs', type: types.SONGS},
                {name: 'Artists', type: types.ARTISTS},
            ],
            selectedMenu: null
        }
    }

    componentDidMount(){
        let selectedMenu = document.getElementsByClassName('admin-menu__item')[0];
        this.setState({ selectedMenu: selectedMenu })
    }

    getMenuList(menus){
        return menus.map((menu, index) => (this.getMenuItem(menu, index)))
    }

    onMenuItemSelect(type, e){
        this.props.listener(type)
        let alreadySelectedMenu = this.state.selectedMenu;
        let currentMenuItem = e.target;

        alreadySelectedMenu.style.backgroundColor = '#1e88e5';
        alreadySelectedMenu.style.color = 'white';
        alreadySelectedMenu.style.padding = '10px 2px';
        alreadySelectedMenu.style.width = '80%';
        
        currentMenuItem.style.backgroundColor = 'white';
        currentMenuItem.style.color = '#1e88e5';
        currentMenuItem.style.padding = '10px 2px';
        currentMenuItem.style.width = '80%';

        this.setState({ selectedMenu: currentMenuItem })
    }

    getMenuItem(menu, index){
        return <li  onClick={this.onMenuItemSelect.bind(this, menu.type)}
                    className="admin-menu__item" 
                    key={index}>
                    {menu.name}
                </li>
    }

    render(){
        return(
            <div className="admin-menu admin-menu--size">
                <h1>Music</h1>
                <ul className="admin-menu__list">
                    {this.getMenuList(this.state.list)}
                </ul>
            </div>
        )
    }
}
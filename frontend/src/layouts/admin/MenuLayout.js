import React, { Component, Fragment } from 'react';
import './menu.scss';

import { Link } from 'react-router-dom';

export default class MenuLayout extends Component{

    constructor(){
        super();
        this.state = {
            list: ['Users', 'Songs', 'Artists', 'Top Songs', 'Recent Songs', 'Recommendation Songs']
        }
    }

    componentDidMount(){

    }

    getMenuList(menus){
        return menus.map((menu, index) => (this.getMenuItem(menu, index)))
    }

    getMenuItem(menu, index){
        return <li 
                    className="menu__item" 
                    key={index}>
                    <Link to="/">{menu}</Link>
                </li>
    }

    render(){
        return(
            <div className="admin-menu">
                <h1>Music</h1>
                <ul className="menu__list">
                    {this.getMenuList(this.state.list)}
                </ul>
            </div>
        )
    }
}
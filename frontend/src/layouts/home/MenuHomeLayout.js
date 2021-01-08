import React, { Component } from 'react';
import './menuhome.scss';

import { connect } from 'react-redux';
import { getMenus } from '../../../../apis/homeApi';

class MenuHomeLayout extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        getMenus();
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
                   { this.getMenus(this.props.menu)}
               </ul>
               <h5 className="menu__label">YOUR LIBRARY</h5>
               <ul className="menu__list">
                   { this.getMenus(this.props.libraryMenu)}
               </ul>
               <h5 className="menu__label">YOUR FAVORITES</h5>
               <ul className="menu__list">
                   { this.getMenus(this.props.favoriteMenu)}
               </ul>
           </div>
       )
    }
}

const mapStateToProps = function(store){
    return {
        menu: store.homeState.menu,
        libraryMenu: store.homeState.libraryMenu,
        favoriteMenu: store.homeState.favoriteMenu
    }
}

export default connect(mapStateToProps)(MenuHomeLayout);
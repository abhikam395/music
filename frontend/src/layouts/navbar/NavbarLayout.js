import React, { Component, Fragment } from 'react';
import './navbar.scss';

import Loadable from 'react-loadable';
import LoadingComponent from '../../components/LoadingComponent';

const SearchBarComponent = Loadable({
    loader: () => import('../../components/SearchBarComponent'),
    loading(){
        return <LoadingComponent/>
    }
})

const NavbarMenuComponent = Loadable({
    loader: () => import('../../components/NavbarMenuComponent'),
    loading(){
        return <LoadingComponent/>
    }
})

export default class NavbarLayout extends Component{

    render(){
        return(
            <div className="navbar navbar--size navbar--theme center">
                <SearchBarComponent/>
                <NavbarMenuComponent/>
            </div>
        )
    }
}
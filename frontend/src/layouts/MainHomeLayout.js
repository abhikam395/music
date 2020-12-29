import React, { Component, Fragment } from 'react';
import './mainhome.scss'

import Loadable from 'react-loadable';
import LoadingComponent from '../components/LoadingComponent';

const NavbarLayout = Loadable({
    loader: () => import('../layouts/navbar/NavbarLayout'),
    loading(){
        return <LoadingComponent/>
    }
})

export default class MainHomeLayout extends Component{

    render(){
        return (
            <div className="main main--size main--theme">
                <NavbarLayout/>
            </div>
        )
    }
}
import React, { Component, Fragment } from 'react';
import './mainhome.scss'

import Loadable from 'react-loadable';
import LoadingComponent from './../../components/LoadingComponent';

const NavbarLayout = Loadable({
    loader: () => import('./../navbar/NavbarLayout'),
    loading(){
        return <LoadingComponent/>
    }
})

const RecommendationAlbumsLayout = Loadable({
    loader: () => import('./../recommendation/RecommendationAlbumsLayout'),
    loading(){
        return <LoadingComponent/>
    }
})

const TopSongsLayout = Loadable({
    loader: () => import('./../songs/TopSongsLayout'),
    loading(){
        return <LoadingComponent/>
    }
})

const  RecentPlayList = Loadable({
    loader: () => import('./../recentplaylist'),
    loading(){
        return <LoadingComponent/>
    }
})

export default class MainHomeLayout extends Component{

    render(){
        return (
            <div className="main main--size main--theme">
                <NavbarLayout/>
                <RecommendationAlbumsLayout/>
                <div className="main__horizontal">
                    <TopSongsLayout/>
                    <RecentPlayList/>
                </div>
            </div>
        )
    }
}
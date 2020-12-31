import React, { Component, Fragment } from 'react';
import './home.scss'

import Loadable from 'react-loadable';
import LoadingComponent from '../components/LoadingComponent';

const MenuHomeLayout = Loadable({
        loader: () => import('../layouts/home/MenuHomeLayout'),
        loading(){
            return <LoadingComponent/>
        }
    });

const MainHomeLayout = Loadable({
    loader: () => import('../layouts/home/MainHomeLayout'),
    loading(){
        return <LoadingComponent/>
    }
});

const MusicPlayerComponent = Loadable({
    loader: () => import('../components/MusicPlayerComponent'),
    loading(){
        return <LoadingComponent/>
    }
})

export default class HomeScreen extends Component{
    
    render(){
        return(
           <div className="home home--size home--theme">
               <aside> <MenuHomeLayout/> </aside>
               <main> <MainHomeLayout/> </main>
               <MusicPlayerComponent/>
           </div>
       )
    }
}
import React, { Component, Fragment } from 'react';
import './home.scss'

import Loadable from 'react-loadable';
import LoadingComponent from '../components/LoadingComponent';

import { connect } from 'react-redux';

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

class HomeScreen extends Component{
    
    render(){
        if(this.props.currentSong){
            return(
                <div className="home home--size home--theme">
                    <aside> <MenuHomeLayout/> </aside>
                    <main> <MainHomeLayout/> </main>
                    <MusicPlayerComponent/>
                </div>
            )
        }
        else{
            return(
                <div className="home home--size home--theme">
                    <aside> <MenuHomeLayout/> </aside>
                    <main> <MainHomeLayout/> </main>
                </div>
            )
        }
    }
}

const mapStateToProps = function(store){
    return{
        currentSong: store.songsState.currentSong
    }
}

export default connect(mapStateToProps)(HomeScreen);


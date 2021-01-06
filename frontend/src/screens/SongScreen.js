import React, { Component, Fragment } from 'react';
import './song.scss';
import { Breadcrumbs, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { get } from './../../store/actions/adminSongsAction';

import { connect } from 'react-redux';

const songs = [
    {id: 1, name: 'Play data', singer: 'Acdsdfd..', 
        image:"https://i.ytimg.com/vi/02SnCU6kRC4/maxresdefault.jpg"},
    {id: 2, name: 'Play data', singer: 'Acdsdfd..', 
        image:"https://i.ytimg.com/vi/02SnCU6kRC4/maxresdefault.jpg"},  
    {id: 3, name: 'Play data', singer: 'Acdsdfd..', 
        image:"https://i.ytimg.com/vi/02SnCU6kRC4/maxresdefault.jpg"}, 
    {id: 4, name: 'Play data', singer: 'Acdsdfd..', 
        image:"https://i.ytimg.com/vi/02SnCU6kRC4/maxresdefault.jpg"},
    {id: 5, name: 'Play data', singer: 'Acdsdfd..', 
        image:"https://i.ytimg.com/vi/02SnCU6kRC4/maxresdefault.jpg"},
    {id: 6, name: 'Play data', singer: 'Acdsdfd..', 
        image:"https://i.ytimg.com/vi/02SnCU6kRC4/maxresdefault.jpg"},
    {id: 7, name: 'Play data', singer: 'Acdsdfd..', 
        image:"https://i.ytimg.com/vi/02SnCU6kRC4/maxresdefault.jpg"},
    {id: 8, name: 'Play data', singer: 'Acdsdfd..', 
        image:"https://i.ytimg.com/vi/02SnCU6kRC4/maxresdefault.jpg"},
    {id: 9, name: 'Play data', singer: 'Acdsdfd..', 
        image:"https://i.ytimg.com/vi/02SnCU6kRC4/maxresdefault.jpg"},         
]

class SongScreen extends Component{

    constructor(){
        super();
        console.log('SongScreen')
    }

    componentDidMount(){
        this.props.getSongs(songs);
    }

    getSongsList(songs){
        return songs.map((song) => (this.getSongItem(song)))
    }

    getSongItem(song){
        return  (<li key={song.id} className="admin-song admin-song--size">
                    <img src={song.image} className="admin-song__image"/>
                    <div>
                        <h4 className="admin-song__name">{song.name}</h4>
                        <h5 className="admin-song__singer">{song.singer}</h5>
                    </div>
                </li>);
    }

    onCreate(){
        // showForms
    }

    render(){
        return(
            <Fragment>
               <div className="admin-container">
                <div className="row">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link className="link" to="/admin">Admin</Link>
                        <Typography color="textPrimary">Songs</Typography>
                    </Breadcrumbs>
                    <button type="button" 
                        className="admin__button admin__button--create"
                        onClick={this.onCreate.bind(this)}>Create</button>
                </div>
                <ul className="admin-songs">
                    {this.getSongsList(this.props.songs)}
                </ul>
               </div>
            </Fragment>
        )
    }
}

const mapStateToProps = function(store){
    return {
        songs: store.adminState.adminSongsReducer.songs
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        getSongs: function(songs){
            dispatch(get(songs))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongScreen)
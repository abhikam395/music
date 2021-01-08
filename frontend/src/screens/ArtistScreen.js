import React, { Component, Fragment } from 'react';
import './artist.scss';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { get } from './../../store/actions/adminArtistsAction';
import { Breadcrumbs, Typography } from '@material-ui/core';

const artists  = [
    {id: 1, name: 'Justin bieber', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg'},
    {id: 2, name: 'Justin bieber', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg'},
    {id: 3, name: 'Justin bieber', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg'},
    {id: 4, name: 'Justin bieber', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg'},
    {id: 5, name: 'Justin bieber', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg'},
    {id: 6, name: 'Justin bieber', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg'},
    {id: 7, name: 'Justin bieber', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg'},
    {id: 8, name: 'Justin bieber', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg'},
    {id: 9, name: 'Justin bieber', 
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg'},    
]

class ArtistScreen extends Component{

    componentDidMount(){
        this.props.getArtists(artists);
    }

    getArtistsList(Artists){
        return Artists.map((artist) => (this.getArtistsItem(artist)))
    }

    getArtistsItem(artist){
        return  (<li key={artist.id} className="admin-artist admin-artist--size">
                    <img src={artist.image} className="admin-artist__image"/>
                    <div>
                        <h4 className="admin-artist__name">{artist.name}</h4>
                    </div>
                </li>);
    }

    render(){
        return(
            <div className="admin-container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link className="link" to="/admin">Admin</Link>
                    <Typography color="textPrimary">Artists</Typography>
                </Breadcrumbs>
                <ul className="admin-artists">
                    {this.getArtistsList(this.props.artists)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = function(store){
    return {
        artists: store.adminState.adminArtistsReducer.artists
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        getArtists: function(artists){
            dispatch(get(artists));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistScreen);
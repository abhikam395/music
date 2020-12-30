import React, { Component } from 'react';
import './recommendationalbums.scss';

export default class RecommendationAlbumsLayout extends Component{

    constructor(){
        super();
        this.state = {
            albums: [ 
                {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
                {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
                {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
                {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
                {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
                {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
                {name: 'Spotlight', singer: 'VAV', image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
            ]
        }
    }

    getAlbumsList(albums){
        return albums.map((album, index) => this.getAlbumItem(album, index))
    }

    getAlbumItem(album, index){
        return  <li className="album album--size" key={index}>
                    <img src={album.image} className="album__image album__image--size"/>
                    <h4 className="album__name">{album.name}</h4>
                    <h5 className="album__singer">{album.singer}</h5>
                </li>   
    } 

    render(){
        return(
            <div className="container container--size center">
                <h2>Recommended Albums</h2>
                <ul className="albums albums--size">
                    { this.getAlbumsList(this.state.albums)}
                </ul>
            </div>
        )
    }
}

import React, { Component } from 'react';
import './searchbar.scss';

import { Search } from '@material-ui/icons';

export default class SearchBarComponent extends Component{

    constructor(){
        super();
        this.state = {
            input: ""
        }
    }

    changeInput(text){
        let value = text.target.value;
        this.setState({
            input: value
        })
    }

    render(){

        return (
            <div className="search-box search-box--size search--theme">
                <Search fontSize="default" className="search-icon"/>
                <input type="search" 
                    id="search" 
                    onChange={this.changeInput.bind(this)}
                    className="search-input search-input--size search-input--theme"
                    placeholder="Search for songs, artists ..."/>
                   
            </div>
        )
    }
}
import React, { Component } from 'react';
import './songstimeoption.scss';

export default class SongsTimeOption extends Component{

    constructor(){
        super();
        this.state = {
            menu: ['Today', 'Week', 'Month'],
            selectedElement: Element
        }
    }

    componentDidMount(){
        this.setState({
            selectedElement: document.getElementsByClassName('time-option')[0]
        })
    }

    getTimeOption(options){
        return options.map((option, index) => this.getOption(option, index));
    }

    getOption(option, index){
        return <li key={index} className="time-option" onClick={this.onSelect.bind(this)}>{option}</li>
    }

    //change options
    onSelect(e){
        var alreadySelectedElement = this.state.selectedElement;
        var recentSeletedElement =  e.target;
        
        alreadySelectedElement.style.borderBottom = 'none';
        recentSeletedElement.style.borderBottom = '3px solid black';

        this.state = {
            selectedElement: recentSeletedElement
        }
    }

    render(){
        return(
            <ul className="time-options">
                {this.getTimeOption(this.state.menu)}
            </ul>
        )
    }
}
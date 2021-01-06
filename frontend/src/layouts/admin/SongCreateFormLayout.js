import React, { Component } from 'react';
import './songcreateform.scss';

import { connect } from 'react-redux';
import { set } from '../../../store/actions/adminSongsAction';

class SongCreateFormLayout extends Component{
    constructor(){
      super();
      this.state = {
          user: {
            song: null,
            artist: null,
          },
          errors: {
            song: null,
            artist: null,
          }
      }
    }

    save(e){
      window.alert('Song saved')
      // let {name, email, password} = this.state.user;

      // if(name == null || name.length < 4)
      //   this.setState({errors:  
      //       Object.assign(this.state.errors, {name: {message: 'Cross check your name'}}) })
      // if(email == null || !email.includes('@gmail.com'))
      //   this.setState({errors:  
      //       Object.assign(this.state.errors, {email: {message: 'Cross check your email'}}) })   
      // if(password == null  || password.length < 4)
      //   this.setState({errors:  
      //       Object.assign(this.state.errors, {password: {message: 'Minimum contains 5 characters'}}) })

      // if(name && email && password){
      //     let user = this.state.user;
      //     this.props.addUser(user);
      //     this.props.unmount();
      // }
    }

    //bind email on inputchange
    setSingerName(e){
      let email = e.target.value;
      this.setState({ user: Object.assign(this.state.user, { email: email })})
      if(email != null && email.includes('@gmail.com')){
        this.setState({errors: Object.assign(this.state.errors, {email: null})})
        this.setState({ user: Object.assign(this.state.user, { email: email })})
      }
      else
        this.setState({errors:  
          Object.assign(this.state.errors, {email: {message: 'Must include @gmail.com in the end'}}) })     
    }

    render(){
      return (
        <div className="row">
          <div className="transparent"></div>
          <form className="songform songform--size songform--theme">
            <label className="songform-label">Song name</label>
            <input type="name" className="songform-input" autoFocus/>
            <label className="songform-label">Artist name</label>
            <input type="name" className="songform-input"/>
            <input type="file" className="songform-input"
              accept=".mp3,audio/*"
              placeholder="Pick song"/>
            <button className="songform-button" type="button" 
                onClick={this.save.bind(this)}>Save</button>
        </form>
        </div>
      )
    }
}

const mapDispatchToProps = function(dispatch){
  return {
    addSong: function(user){
      dispatch(set(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(SongCreateFormLayout);
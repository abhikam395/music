import React, { Component } from 'react';
import './adduser.scss';

export default class AddUserLayout extends Component{
    constructor(){
      super();
      this.state = {
          options : ['User', 'Admin'],
          user: {
            name: null,
            email: null,
            password: null,
            role: 'User'
          },
          errors: {
            name: null,
            email: null,
            password: null
          }
      }
    }

    roleOptions(){
      return this.state.options.map((option, index) => 
        <option value={index} key={index}>{option}</option>)
    }

    save(e){
      let {name, email, password} = this.state.user;

      if(name == null || name.length < 4)
        this.setState({errors:  
            Object.assign(this.state.errors, {name: {message: 'Cross check your name'}}) })
      if(email == null || !email.includes('@gmail.com'))
        this.setState({errors:  
            Object.assign(this.state.errors, {email: {message: 'Cross check your email'}}) })   
      if(password == null  || password.length < 4)
        this.setState({errors:  
            Object.assign(this.state.errors, {password: {message: 'Minimum contains 5 characters'}}) })
      if(name && email && password)
        console.log(true)     
    }

    //bind username on inputchange
    setName(e){
      let name = e.target.value;
      if(name != null && name.length > 4){
        this.setState({errors: Object.assign(this.state.errors, {name: null})})
        this.setState({ user: Object.assign(this.state.user, { name: name })})
      }
      else
        this.setState({errors:  
          Object.assign(this.state.errors, {name: {message: 'Minimum contains 5 characters'}}) })
    }

    //bind email on inputchange
    setEmail(e){
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

    //bind password on inputchange
    setPassword(e){
      let password = e.target.value;
      this.setState({ user: Object.assign(this.state.user, { password: password })})
      if(password != null  && password.length > 4){
        this.setState({errors: Object.assign(this.state.errors, {password: null})})
        this.setState({ user: Object.assign(this.state.user, { password: password })})
      }
      else
        this.setState({errors:  
          Object.assign(this.state.errors, {password: {message: 'Minimum contains 5 characters'}}) })
    }

    //bind role inputchange
    setRole(e){
      this.setState({ user: Object.assign(this.state.user, { role: e.target.value })})
    }

    render(){
      console.log('render')
      let { name, email, password } = this.state.errors;

      function nameError(){
        if(name){
          return <span className="adduser-error">{name.message }</span> 
        } 
      }

      function emailError(){
        if(email)
          return <span className="adduser-error">{email.message }</span>  
      }

      function passwordError(){
        if(password)
          return <span className="adduser-error">{password.message }</span>  
      }

      return (
        <form className="adduser adduser--size adduser--theme">
            <label className="adduser-label">Username</label>
            <input type="name" className="adduser-input" autoFocus 
                onChange={this.setName.bind(this)} />
            {nameError()}
            <label className="adduser-label">Email</label>
            <input type="email" className="adduser-input"
              onChange={this.setEmail.bind(this)} />
            {emailError()}
            <label className="adduser-label">Password</label>
            <input type="password" className="adduser-input"
              onChange={this.setPassword.bind(this)} />
            {passwordError()}  
            <label className="adduser-label">Role</label>
            <select className="adduser-select" 
              onSelect={this.setRole.bind(this)} >
              {this.roleOptions()}
            </select>
            <button className="adduser-button" type="button" 
                onClick={this.save.bind(this)}>Save</button>
        </form>
      )
    }
}
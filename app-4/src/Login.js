import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleAlert = this.handleAlert.bind(this)
    }

    handleUsername(val){
        this.setState({username: val})
    }

    handlePassword(val){
        this.setState({password: val})
    }

    handleAlert(){
        alert (`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input placeholder='Username' 
                    onChange={(e) => this.handleUsername(e.target.value)}/>
                <input placeholder='Passsword' 
                    onChange={(e) => this.handlePassword(e.target.value)}/>
                <button onClick={this.handleAlert}>Login</button>
            </div>
        )
    }
}

export default Login 
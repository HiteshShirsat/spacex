import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';

class Login extends Component {

  state={email:"",password:""}
  input(e)
  { 
    let s=this.state
    let col=e.target.name
    let val=e.target.value
    s[col]=val
    this.setState(s)
  }
  submit(e)
  { 
    e.preventDefault()
    this.props.user_login(this.state)
  }
  render() {
    let {email,password}=this.state
    return (
      <div className="login1">
        <form onSubmit={this.submit.bind(this)}>
          <h1>Login as User</h1>
          <p>username</p>
          <input  name="email" placeholder="email" value={email} onChange={this.input.bind(this)} />
          <p>password</p>
          <input  name="password" placeholder="password" value={password} onChange={this.input.bind(this)} />
          <button>Login as User</button>
        </form>
      </div>
    );
  }
}

export default connect(state=>state,f2)(Login);
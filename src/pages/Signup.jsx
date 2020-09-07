import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';


class Signup extends Component {

  state={
    name:"",
    email:"",
    phone:"",
    password:"",
    confirm:""
  }
  input(e)
  {
      let col=e.target.name
      let val=e.target.value
      let s=this.state
      s[col]=val
      this.setState(s)
  }

  submit(e)
  {
    e.preventDefault()
    let ob={
      name:this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      password:this.state.password
    }
    this.props.signup(ob)
  }
  render() {
    let {name,email,phone,password,confirm}=this.state
    return (
      <div className="signup">
        <form onSubmit={this.submit.bind(this)}>
          <h1>Signup as User </h1>
          <p>name</p>
          <input name="name" placeholder="name" value={name} onChange={this.input.bind(this)} />
          <p>email</p>
          <input name="email" placeholder="email" value={email} onChange={this.input.bind(this)} />
          <p>phone</p>
          <input name="phone" placeholder="phone" value={phone} onChange={this.input.bind(this)} />
          <p>password</p>
          <input name="password" placeholder="password" value={password} onChange={this.input.bind(this)} />
          <p>confirm</p>
          <input name="confirm" placeholder="confirm" value={confirm} onChange={this.input.bind(this)} />
          <button>Signup as User</button>
        </form>
      </div>
    );
  }
}

export default connect(state=>state,f2)(Signup);

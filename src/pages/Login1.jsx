import React,{Component} from 'react';

import {connect} from 'react-redux';
import * as f2 from '../store/actions';

class Login extends Component {
  state={email:"",password:""}

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
    this.props.admin_login(this.state)
  }

  componentDidMount()
  {
    console.clear()
    
    // var db = firebase.firestore();
    // let a=[]
    // db.collection("users").get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // });

  }
  render() {
    let {email,password}=this.state
    return (
      <div className="login1">
        <form onSubmit={this.submit.bind(this)}>
          <h1>Login as Admin</h1>
          <p>username</p>
          <input name="email" placeholder="email" value={email} onChange={this.input.bind(this)} />
          <p>password</p>
          <input name="password" placeholder="password" value={password} onChange={this.input.bind(this)} />
          <button>Login as Admin</button>
        </form>
      </div>
    );
  }
}

export default connect(state=>state,f2)(Login);

import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// import firebase from '../firebase';

import {connect} from 'react-redux';
import * as f2 from '../store/actions';

class Nav extends Component {

  render() {
    let {role,user}=this.props
    return (
      <div className="header">
        {role===""?<Link to="/">home</Link>:null}
        {role===""?<Link to="/">Admin</Link>:null}
        {role===""?<Link to="/login2">User</Link>:null}
        {role===""?<Link to="/signup">signup as user</Link>:null}
        {role==="user"?<Link to="/user">welcome {user.name} user</Link>:null}
        {role==="admin"?<Link to="/admin">welcome {user.name} admin</Link>:null}
        {role==="admin"||role==="user"?<Link to="/logout">logout</Link>:null}
      </div>
    );
  }
}

export default connect(state=>state,f2)(Nav);
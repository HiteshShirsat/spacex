import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';

class Logout extends Component {

  componentDidMount()
  {
  	this.props.logout()
  }		
  render() {
    return (
      <div className="Logout">
        yuo have successfully logout from system click to continue above in menu
      </div>
    );
  }
}

export default connect(state=>state,f2)(Logout);

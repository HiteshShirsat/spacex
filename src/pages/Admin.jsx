import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';
import Table1 from './Table1';

class Admin extends Component {


  constructor(p)
  {
    super(p)
    this.toggle=this.toggle.bind(this)
    this.state={status:true}
    this.props.loadUsers()
  }
  toggle()
  {
    this.setState({status:!this.state.status})
  }
  render() {
    let {status}=this.state
    let {data}=this.props
    return (
      <div className="main">
        <div className={status?"left":"left active"}>
          <span>All Users</span>
          {data.filter(x=>x.name).map(x=><span>{x.name}</span>)}

        </div>  
        <div className={status?"right":"right active"}>
          <button className={status?"btn":"btn active"} onClick={this.toggle}><i className="fa fa-bars"></i></button>
          <div className="content">
            <table cellspacing="0" cellpadding="10">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>password</th>
                </tr>
              </thead>
              <tbody>
                {data.filter(x=>x.name).map((x,i)=>
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.phone}</td>
                    <td>{x.password}</td>
                  </tr>
                  
                )}
              </tbody>
            </table>
          </div>
        </div>  
      </div>
    );
  }
}

export default connect(state=>state,f2)(Admin);

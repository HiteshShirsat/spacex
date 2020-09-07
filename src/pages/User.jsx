import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';
import Table1 from './Table1';

class User extends Component {


  constructor(p)
  {
    super(p)
    this.toggle=this.toggle.bind(this)
    this.state={status:true}
  }
  _col(a)
  {
    if(a.length>0)
    {
      return Object.keys(a[0])
    }
    else
    {
      return []
    }
  }
  toggle()
  {
    this.setState({status:!this.state.status})
  }
  click(ob)
  {
    this.props.api(ob)
  }
  render() {
    let {status}=this.state
    let {list,option}=this.props
    return (
      <div className="main">
        <div className={status?"left":"left active"}>

          {list.map((x,i)=>
              <span 
              key={i}
              onClick={this.click.bind(this,x)}
              className={x.name.toLowerCase()===option.toLowerCase()?'active':''}
              >
                {x.name}
              </span>
            )}
        </div>  
        <div className={status?"right":"right active"}>
          <button className={status?"btn":"btn active"} onClick={this.toggle}><i className="fa fa-bars"></i></button>
          <div className="content">
          {option&&<div className="breads">
                  viewing now : {option}
                    </div>}
            {option&&<Table1  />}
          </div>
        </div>  
      </div>
    );
  }
}

export default connect(state=>state,f2)(User);

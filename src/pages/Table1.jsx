import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';
class Table1 extends Component {
	render()
	{
		let {th,tr,data,option}=this.props
				return (
					<div style={{overflow:"auto",height:"50vh"}}>
						<div className="user-flex">
							<Box data={data} />
						</div>
					</div>
				)
	}
}

export default connect(state=>state,f2)(Table1);

let Box=props=>{
	if(props.data.length>0)
	{

	return <>{props.data.map(x=>
		<div className="item">
			<Item data={Object.values(x)} />
		</div>
			)}</>
	}
	else
	{
		return <>{Object.values(props.data).map(x=>
			<div className="item">
				<Item data={Object.values(x)} />
			</div>
				)}</>	
	}
}

let Item=(props)=>{
	return <>
				{props.data.map(x=><Div data={x} type={typeof x} />)}
		   </>
}

let Div=props=>{
	if(props.type==="object")
	{
		return <div><Details data={props.data} title="details" /></div>
	}
	else
	{
		return <div>{props.data}</div>
	}
}

let Details=props=>{
	return <>
			<mark>{props.title}</mark>
			<details>	
				{JSON.stringify(props.data)}
			</details>	
		   </>
}
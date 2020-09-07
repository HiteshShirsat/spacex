import axios from 'axios';
import firebase from '../firebase';

export function logout()
{
	return dispatch=>{
		localStorage.clear()
		return dispatch({type:"logout"})
	}

}
export function api(ob)
{
	return dispatch=>axios.get(ob.path)
	.then(d=>{
		let th=[]
		let tr=[]
		if(d.data.length>0)
		{
			th=Object.keys(d.data[0]).map(x=>typeof x!="object"?x:"details")
			tr=d.data.map(x=>Object.values(x).map(x=>typeof x!="object"?x:"details"))
		}
		console.log(th)
		console.log(tr)
		dispatch({type:"api_success",payload:{data:d.data,option:ob.name,th:th,tr:tr}})
	})
	.catch(d=>dispatch({type:"api_failed",payload:d.message}))
}

export function admin_login(ob)
{
	return dispatch=>{
		if(ob.email==="admin@gmail.com"&&ob.password==="admin")
		{
			alert("welcome admin")
			localStorage.setItem("role","admin")
			localStorage.setItem("user",JSON.stringify(ob))
			dispatch({type:"admin_login_success"})
			this.history.push("/admin")

		}
		else
		{
			alert("failed to login as admin")
			localStorage.clear()
			dispatch({type:"admin_login_failed"})
		}
	}

}
export function user_login(ob)
{
	return dispatch=>{
		let a=[]
		var db=firebase.firestore()
		db.collection("users").get().then(d=>{
			d.forEach(x=>{a.push(x.data()) })
			if(a.filter(x=>x.email===ob.email && x.password===ob.password).length>0)
			{
				alert("welcome user")
				localStorage.setItem("role","user")
				localStorage.setItem("user",JSON.stringify(a.find(x=>x.email===ob.email)))
				dispatch({type:"user_login_success",payload:a.find(x=>x.email===ob.email)})	
				this.history.push("/user")
			}
			else
			{
				alert("failed to login as user")
				localStorage.clear()
				dispatch({type:"user_login_failed"})	
			}
		})
	}

}
export function signup(ob)
{
	return dispatch=>{
		let a=[]
		var db=firebase.firestore()
		db.collection("users").get().then(d=>{
			d.forEach(x=>{a.push(x.data()) })
			if(a.filter(x=>x.email===ob.email).length===0)
			{
				alert("signup successfull")
				db.collection("users").add(ob).then(f=>{
					dispatch({type:"user_signup_success"})	
				})
				.catch(e=>{
					dispatch({type:"user_signup_failed"})	
				})
			}
			else
			{
				alert("failed to signup as user")
				dispatch({type:"user_signup_failed"})	
			}
		})
	}

}



export function loadUsers()
{
	return dispatch=>{
		let a=[]
		var db=firebase.firestore()
		db.collection("users").get().then(d=>{
			d.forEach(x=>{a.push(x.data()) })
				dispatch({type:"users",payload:a})	
		})
	}

}




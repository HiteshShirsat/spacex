import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Nav from './Nav'
import Logout from './Logout'
import Footer from './Footer'
import Login1 from './Login1'
import Login2 from './Login2'
import Signup from './Signup'
import User from './User'
import Admin from './Admin'
 class App extends Component
{
	render()
	{
		return (
				<Router>
					<Nav />				
					<div className="layout">
						<Switch>
							<Route exact path="/" component={Login1}  />
							<Route exact path="/login2" component={Login2}  />
							<Route exact path="/signup" component={Signup}  />
							<Route exact path="/User" component={User}  />
							<Route exact path="/Admin" component={Admin}  />
							<Route exact path="/Logout" component={Logout}  />
							<Route component={ErrorPage}  />
						</Switch>
					</div>
					<Footer />				
				</Router>
			)
	}
}

let ErrorPage=()=><h1>ErrorPage</h1>
export default App;
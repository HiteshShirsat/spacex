const intialState={
	user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{},
	role:localStorage.getItem("role")?localStorage.getItem("role"):"",
	status:"",
	messgae:"",
	data:[],
	option:"",
	th:[],
	tr:[],
	list:[
		{name:"Capsules",path:"https://api.spacexdata.com/v3/capsules"},
		{name:"Cores",path:"https://api.spacexdata.com/v3/cores"},
		{name:"Dragons",path:"https://api.spacexdata.com/v3/dragons"},
		{name:"History",path:"https://api.spacexdata.com/v3/history"},
		{name:"Info",path:"https://api.spacexdata.com/v3/info"},
		{name:"Landing Pads",path:"https://api.spacexdata.com/v3/landpads"},
		{name:"Launches",path:"https://api.spacexdata.com/v3/launches"},
		{name:"Launch Pads",path:"https://api.spacexdata.com/v3/launchpads"},
		{name:"Missions",path:"https://api.spacexdata.com/v3/missions"},
		{name:"Payloads",path:"https://api.spacexdata.com/v3/payloads"},
		{name:"Rockets",path:"https://api.spacexdata.com/v3/rockets"},
		{name:"Roadster",path:"https://api.spacexdata.com/v3/roadster"},
		{name:"Ships",path:"https://api.spacexdata.com/v3/ships"}
	],
}


const reducer=(state=intialState,action)=>{
	switch(action.type)
	{
		
		case "admin_login_success":
				return {
					...state,
					user:{id:1,name:"admin",email:"admin@gmail.com",password:"admin"},
					role:"admin",
					messgae:"welcome admin"
				}
		case "admin_login_failed":
				return {
					...state,
					user:{},
					role:"",
					messgae:"failed to login"
				}
		case "user_login_success":
				return {
					...state,
					user:action.payload,
					role:"user",
					messgae:"welcome user"
				}
		case "user_login_failed":
				return {
					...state,
					user:{},
					role:"",
					messgae:"failed to login as user"
				}
		case "user_signup_success":
				return {
					...state,
					messgae:"signup successfull"
				}
		case "user_signup_failed":
				return {
					...state,
					messgae:"signup failed"
				}
		case "api_success":
				return {
					...state,
					messgae:"api loaded",
					option:action.payload.option,
					data:action.payload.data,
					th:action.payload.cols,
					tr:action.payload.table
				}
		case "api_failed":
				return {
					...state,
					messgae:action.payload,
					th:[],
					tr:[],
					data:[]
				}
				
				
				
		case "loading":
			return {
				...state,
				loading:false
			}

		case "logout":
			return {
				...state,
				user:{},
				role:"",
				status:false,
				messgae:"kindly login again",
				data:[],
				option:"",
				th:[],
				tr:[],
			}
		case "users":
			return {
				...state,
				messgae:"all users loaded from firebase completed",
				data:action.payload,
			}
			

			
		default:
			return state
	}
}

export default reducer;
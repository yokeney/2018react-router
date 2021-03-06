import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Home from './Home'
import User from './User'
import  'bootstrap/dist/css/bootstrap.css'
import Profile from './Profile'
import ProtectRouter from'./ProtectRouter'
import Login from './Login'
import Menu from './Menu'
import NoFound from './NoFound'
import Invest from './Invest'
/*
当用户访问个人设置时，先判断用户是否已登录，如果已登录显示个人设置页面，如果没有登录则跳转登录页面
ProtectRouter登录保护路由
	<Route path="/:name" render={props=><div>{props.match.params.name}</div>}/>
	阻碍了下面的执行
*/
let hello=(props)=>{
	return <div>首页</div>;
}
export default (
	<div className="footer">
	<Router>
	<div>
	<nav className="navbar">
	<ul className="nav">
		<Menu label="首页 " to="/home" icon="1"/>
		<Menu label="新手 " to="/user" icon="2"/>
		<Menu label="投资 " to="/Invest" icon="3"/>
		<Menu label="我的 " to="/profile" icon="4"/>
	</ul>
</nav>
	<div className="container">
		<div className="row">
			<div className="col-sm-10">
				<Route path="/home" component={Home}/>
				<Route path="/" exact render={hello}/>
				<ProtectRouter path="/profile" component={Profile}/>
				<ProtectRouter path="/user" component={User}/>
				<Route path="/login" component={Login}/>
				<Route path="/Invest" component={Invest}/>
				<Route  component={NoFound}/>
			</div>
		</div>
	</div>
	</div>
	</Router>
	</div>
)

import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Home from './Home'
import User from './User'
import  'bootstrap/dist/css/bootstrap.css'
import Profile from './Profile'
import ProtectRouter from'./ProtectRouter'
import Login from './Login'
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
	<Router>
	<div>
	<nav className="navbar navbar-default ">
	<div className="container-fluid">
	<div className="navbar-header">
		<a className="navbar-brand" >菜鸟教程</a>
	</div>
	<ul className="nav navbar-inverse">
		<li role="presentation"><Link to="/home">首页</Link></li>
		<li role="presentation"><Link to="/user">用户管理</Link></li>
		<li role="presentation"><Link to="/profile">个人设置</Link></li>
	</ul>
	</div>
</nav>
	<div className="container">
		<div className="row">
			<div className="col-sm-10">

				<Route path="/home" component={Home}/>
				<Route path="/" exact render={hello}/>
				<ProtectRouter path="/profile" component={Profile}/>
				<ProtectRouter path="/user" component={User}/>
				<Route path="/login" component={Login}/>

			</div>
		</div>
	</div>
	</div>
	</Router>
)

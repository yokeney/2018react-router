import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './Home'
import User from './User'
import  'bootstrap/dist/css/bootstrap.css'
import Profile from './Profile'
export default (
	<Router>
	<div>
	<nav className="navbar navbar-default ">
	<div className="container-fluid">
	<div className="navbar-header">
		<a className="navbar-brand" >菜鸟教程</a>
	</div>
	<ul className="nav nav-pills">
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
			<Route path="/user" component={User}/>
			<Route path="/profile" component={Profile}/>
			</div>
		</div>
	</div>
	</div>
	</Router>
)

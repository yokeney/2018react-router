import React,{Component} from "react";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import UserList from './UserList.js'
import UserAdd from './UserAdd.js'
import UserDetail from './UserDetail.js'
import  'bootstrap/dist/css/bootstrap.css'
 export default class User extends Component{
 	render(){
 		return (
            <div className="row">
                <div className="col-sm-2">
                    <ul className="nav ">
                        <li><Link to="/user/list">用户列表</Link></li>
                        <li><Link to="/user/add">新增用户</Link></li>
                    </ul>
                </div>
                <div className="col-sm-10">
                    <Route path="/user/list" component={UserList} />
                    <Route path="/user/add" component={UserAdd} />
                    <Route path="/user/userdetail/:id" component={UserDetail} />
                </div>
            </div>
 		)
 	}
 }

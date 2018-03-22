
import React,{Component} from "react";
import {Link} from "react-router-dom"
 export default class UserList extends Component{
     constructor(){
         super();
         this.state={users:[]};
     }
     componentWillMount(){
         //从缓存中读取用户列表字符串null字符串
         let userStr=localStorage.getItem("users");
         //转为对象数组
         let users=userStr;
         this.setState({users});
     }
 	render(){
        console.log(this.props);
        //history跳转路由路径
        //match匹配结果，如果匹配上就是对象，匹配不上就是null
        //location当前路径pathname
        // <li className="list-group-item"><Link to="/user/userdetail/1">张三</Link></li>
         //<li className="list-group-item"><Link to="/user/userdetail/2">李四</Link></li>
 		return (
 			<ul className="list-group">
                <li ><Link to='/user/UserDetail/1'>sss</Link></li>
                <li ><Link to='/user/UserDetail/2'>ddd</Link></li>

 			</ul>
 		)
 	}
 }

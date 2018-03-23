
import React,{Component} from "react";
import {Link} from "react-router-dom"
 export default class UserList extends Component{
     constructor(){
         super();
         this.state={users:[]};
     };
     componentDidMount(){
         //从缓存中读取用户列表字符串null字符串
         let userStr=localStorage.getItem("users");
         //转为对象数组
        console.log(userStr);
         let users=userStr ? JSON.parse(userStr):[];
         this.setState({users})
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
                {
                    this.state.users.map((user,index)=>(
                        <li className="list-group-item" key={index}><Link to={"/user/userdetail/"+user.id}>{user.name}</Link></li>
                        )
                    )
                }

 			</ul>
 		)
 	}
 }

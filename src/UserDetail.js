import React,{Component} from "react";
 export default class UserDetail extends Component{
 	render(){
        //history跳转路由路径
        //match匹配结果，如果匹配上就是对象，匹配不上就是null
        //location当前路径pathname
		console.log(this.props);
        let id=this.props.match.params.id;
         let userStr=localStorage.getItem("users");
          let users=userStr ? JSON.parse(userStr):[];
          let user=users.find(user=>user.id==id);
 		return (
			<div>
				<div>
				id:{user.id}
				姓名:{user.name}
				</div>
			</div>
 		)
 	}
 }

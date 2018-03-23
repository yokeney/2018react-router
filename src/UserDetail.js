import React,{Component} from "react";
 export default class UserDetail extends Component{
 	render(){
        //history跳转路由路径
        //match匹配结果，如果匹配上就是对象，匹配不上就是null
        //location当前路径pathname
		console.log(this.props,"obj");
        let id=this.props.match.params.id;
         let userStr=localStorage.getItem("users");
          let users=userStr ? JSON.parse(userStr):[];
          //遍历数组与传入的id
          let user=users.find(user=>user.id==id);
 		return (
                <table className="table table-striped" >
                    <tr className="success">
                      <td className="active">id:{user.id}</td>
                      <td className="active">姓名:{user.name} </td>
                      <td className="active"><a href="javascript:;" className="button button-tiny button-primary">删除</a></td>
                    </tr>
                </table>
 		)
 	}
 }

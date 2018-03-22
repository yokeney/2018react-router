import React,{Component} from "react";
 export default class UserAdd extends Component{
     handleSub=()=>{
         let name=this.name.value;
         //从缓存中读取用户列表字符串null字符串
         let userStr=localStorage.getItem("users");
         //转为对象数组
         let users=userStr?JSON .parse(userStr):[];
         //向此数组转入新的对象
         users.push({id:Date.now(),name});
         //在把数组保存到缓存当中
         console.log(users);
         localStorage.setItem('users',JSON.stringify(users));
         //在通过用户的history对象的push方法调到用户列表页面
         this.props.history.push('/user/list');//相当于winow.location.href
     }
 	render(){
 		return (
					<form action="" onSubmit={this.handleSub}>
                        <div className="form-group">
                            <label htmlFor="name">
                                <input type="text" className="form-control" ref={ref=>this.name=ref}/>
                            </label>
                        </div>
                        <div className="form-group">
                            <input type="text" type="submit" className="btn bnt-primary" />
                        </div>
                    </form>

 		)
 	}
 }

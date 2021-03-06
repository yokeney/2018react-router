import React,{Component} from "react";
import {Prompt} from 'react-router-dom'
 export default class UserAdd extends Component{
     constructor(props){
         super(props);
         this.state={blocking:false}
     }
     handlechange=(event)=>{
         this.setState({
             blocking:event.target.value&&event.target.value.length>0
         })
     }
     handleSub=()=>{
         let name=this.name.value;//指向真实dom元素
         if (name==="") {
             alert("请输入名字")
             return false;
         }
         else{
             //从缓存中读取用户列表字符串null字符串
             let userStr=localStorage.getItem("users");
             //转为对象数组
             let users=userStr?JSON.parse(userStr):[];
             //向此数组转入新的对象
             users.push({id:Date.now(),name});
             //在把数组保存到缓存当中
             localStorage.setItem('users',JSON.stringify(users));
             //在通过用户的history对象的push方法调到用户列表页面
             this.setState({
                 blocking:false
             },()=>{
                 this.props.history.push('/user/list');//相当于winow.location.href
                 //ref={ref=>this.name=ref}引用真实的dom元素
             })
         }
     }
 	render(){
 		return (
                <div>
                <Prompt when={this.state.blocking} message={(location)=>`你确定跳转到${location.pathname}`}/>
                <form action="" onSubmit={this.handleSub}>
                    <div className="form-group">
                        <label htmlFor="name">
                            <input type="text" className="form-control" ref={ref=>this.name=ref} onChange={this.handlechange}/>
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="text" type="submit"  />
                    </div>
                </form>
                </div>
 		)
 	}
 }

import React from 'react'
export default function(props){
	return <button className="btn button-primary"
	onClick={()=>{
		localStorage.setItem('login','true');
		props.history.push(props.location.state.from)//跳转登录前的页面
	}}>登录</button>
}

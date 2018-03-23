import React from 'react'
export default function(props){
	return <button className="btn button-primary" onclick={()=>{
		localStorage.setItem('login','true');
		props.history.push(props.location.state.from)
	}}>登录</button>
}

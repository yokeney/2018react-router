/*
有时候不管皮不匹配都显示一些东西
children不管匹配得上海市匹配不上都要进行渲染，match 是点击每个的类名
*/
import React from 'react'
import {Route,Link} from 'react-router-dom'
export default function(props){
 return <Route path={props.to} children={({match})=>{
	 return <li  role="presentation" className={match?'active':''}><i className={match?'active'+props.icon:''}></i><Link to={props.to}>{props.label}</Link></li>
 }}/>

}

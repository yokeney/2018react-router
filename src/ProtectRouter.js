import React from 'react'
import {Redirect,Route} from 'react-router-dom'
//保护路由访问路径组件
//通过函数定义组件，参数是属性对象
//当一个组件不需要状态的时候可以用函数来声明
//当一个组件需要状态的时候必须要class类声明
//props={path:"/profile",component:profile}
//rest={path:"/profile"}

 // export default function({component:Component,...rest}){
 //  return <Route {...rest} render={(props)=>localStorage.getItem("login")?<Component/>:<Redirect to={{pathname:'/login',state:{from:props.location.pathname}
 // 	 }}/>
 //  }/>
 // }
 export default function({component:Component,...rest}){
     return <Route {...rest} render={(props)=>localStorage.getItem("login")?<Component/>:<Redirect to={{pathname:'login',state:{from:props.location.pathname}}}/>} />

 }

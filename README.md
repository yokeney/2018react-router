<p>1首先引用import {BrowserRouter as Router,Route,Link} from 'react-router-dom'</p>
<p>import  'bootstrap/dist/css/bootstrap.css'</p>
<p>2在组件中加入</p>
<Link to="/user/list">用户列表</Link>
<Route path="/user/list" component={UserList} />
<Link to="/user/add">新增用户</Link>
<Route path="/user/add" component={UserAdd} />
完成初步的路由
<h1>路由的嵌套</h1>
<h4>在添加一个路由组件<Route path="/user/userdetail/:id" component={UserDetail} /></h4>
<h5>在useradd组件上，添加用户操作，操作完跳转路由用 this.props.history.push('/user/list');//相当于winow.location.href</h5>
<p>#ref={ref=>this.name=ref}引用真实的dom元素</p>
<h4>在userlist componentWillMount方法中读取localStorage的数组对象在this.setState({users})在组件中</h4>
{
	this.state.users.map((user,index)=>(
		<li className="list-group-item" key={index}><Link to={"/user/userdetail/"+user.id}>{user.name}</Link></li>
		)
	)
}
<h5>我在map方法踩坑了，结构体</h5>
<h5>然后在跳转userDetail组件</h5>
<h4>//遍历从localStorage数组与传入的id做匹配</h4>
<h5>let user=users.find(user=>user.id==id);获取当个对象</h5>
<ul>
	<li>history跳转路由路径</li>
	<li>match匹配结果，如果匹配上就是对象，匹配不上就是null</li>
	<li>location当前路径pathname</li>
	<li>this.props.history.push('/user/list');</li>
	<li>相当于winow.location.href</li>
	<li>ref={ref=>this.name=ref}引用真实的dom元素</li>
</ul>
<h3>Switch匹配</h3>
<h4>引入Switch</h4>
<h5>import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'</h5>
<ul>
	<li><Route path="/:name" render={props=><div>{props.match.params.name}</div>}/><span>匹配路由name到页面</span></li>
	<li><Route path="/" exact render={hello}/><span>严格匹配加 exact</span></li>
</ul>
<h1>保护路由访问路径</h1>
<span>定义一个保护路由	<Route path="/login" component={Login}/>创建Login 组件</span>
<span>
保护路由访问路径组件
通过函数定义组件，参数是属性对象
当一个组件不需要状态的时候可以用函数来声明
当一个组件需要状态的时候必须要class类声明
props={path:"/profile",component:profile}
rest={path:"/profile"}</span>
<p>export default function({component:Component,...rest}){
	return <Route {...rest} render={(props)=>localStorage.getItem("login")?<Component/>:<Redirect to={{pathname:'/login',state:{from:props.location.pathname}
		}}/>
	}/>
}</p>
<span>//跳转登录前的页面</span>

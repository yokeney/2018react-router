<p>1首先引用import {BrowserRouter as Router,Route,Link} from 'react-router-dom'</p>
<p>import  'bootstrap/dist/css/bootstrap.css'</p>
<p>2在组件中加入</p>
<Link to="/user/list">用户列表</Link>
<Route path="/user/list" component={UserList} />
<Link to="/user/add">新增用户</Link>
<Route path="/user/add" component={UserAdd} />
完成初步的路由
<h1>路由的嵌套</h1>
在添加一个路由组件<Route path="/user/userdetail/:id" component={UserDetail} />
在useradd组件上，添加用户操作，操作完跳转路由用 this.props.history.push('/user/list');//相当于winow.location.href
<p>#ref={ref=>this.name=ref}引用真实的dom元素</p>
在userlist componentWillMount方法中读取localStorage的数组对象在this.setState({users})在组件中
{
	this.state.users.map((user,index)=>(
		<li className="list-group-item" key={index}><Link to={"/user/userdetail/"+user.id}>{user.name}</Link></li>
		)
	)
}
我在map方法踩坑了，结构体
然后在跳转userDetail组件
//遍历从localStorage数组与传入的id做匹配
let user=users.find(user=>user.id==id);获取当个对象
路由demo
history跳转路由路径
match匹配结果，如果匹配上就是对象，匹配不上就是null
location当前路径pathname
this.props.history.push('/user/list');
相当于winow.location.href
ref={ref=>this.name=ref}引用真实的dom元素

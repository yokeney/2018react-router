import React,{Component} from "react";
 export default class UserDetail extends Component{
 	render(){
        //history跳转路由路径
        //match匹配结果，如果匹配上就是对象，匹配不上就是null
        //location当前路径pathname
		console.log(this.props);
 		return (
			<div>
				<div>
				{this.props.match.params.id}
				</div>
			</div>
 		)
 	}
 }

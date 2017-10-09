import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

//import '../css/menu.css'

export default class SideBar extends Component {

	handleMouseOver(name){
	}
	
	handleMouseLeave(name){
	}
	
	render() {
	
	return (
	<aside className="menu">
		<ul>
			<li>
				
				<NavLink to="/" >
					Home
				</NavLink>
				
				<NavLink to="/about" >
					About
				</NavLink>

			</li>
		</ul>	
	</aside>
	)}
}
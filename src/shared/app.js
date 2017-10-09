import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'

import Menu from './components/menu.js'
import Main from './components/main.js'
import About from './components/about.js'
import NotFound from './components/notfound.js'

import './css/app.css'

class App extends Component{
	render(){
		return (
			<div id = "wrapper">
				<Menu /> 
				<div id = "content">
					<Switch>
						{routes.map((route,i) => 
							<Route 
								key={i}
								{...route}
							/>
						)}
						<Route component={NotFound}/>  
					</Switch>
				</div>
			</div>
		);
	}
}

export default App
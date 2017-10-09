import { Route } from 'react-router-dom';
import React, { Component } from 'react';
//import '../css/notfound.css'

export default class NotFound extends Component {
	render() {
		return (
			<Route render={({ staticContext }) => {
				if (staticContext) {
					staticContext.status = 404;
				}
				return (
					<div className="not-found">
						NotFound
						
					</div>
				)
			}}/>
		);
	}
}
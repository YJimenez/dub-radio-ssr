import React, { Component } from 'react'

export default class About extends Component {
	
	constructor(props){
		super(props);
		let initialState
		
		if(props.staticContext){
			initialState = props.staticContext;
			console.log(initialState);
		} else {
			initialState = window.__INITIAL_STATE__;
			console.log(initialState);
			delete window.__INITIAL_STATE__;
		}
		
		this.state = { data: initialState }
	}
	
	componentDidMouns(){
		
	}
	
	handleClick(e){
		//console.log(this.state.data);
		
		console.log('click works');
	}
	
	render() {
		
		return (
			<div>	
				About
				<br/>
				<br/>
				<button onClick={this.handleClick}>Click</button>
			</div>
		)
	}
}
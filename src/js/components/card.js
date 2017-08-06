import React from 'react';


export default class Card extends React.Component{
	constructor(par){
		super();
		console.log('card in',par);
		this.state = {
			value : par.value
		};
	}
	render(){

		return(
			<div class="card">{this.state.value}</div>
		);
	}
}



import React from "react";

import GameCntrl from '../misc/gameCntrl';
import Card from '../components/card';



export default class CardHolder extends React.Component{
	constructor(params){
		super(params);
		const {email} = params.params;
		console.log('par',email);
		//fetch saved state

		//create new state
		this.gameCntrl = new GameCntrl();
		console.log(this.gameCntrl);
		const {cards} =  this.gameCntrl;
		this.state = {
			cards: cards
		};
		console.log(this.state);
	}
	render(){
		const cards = this.state.cards.map((val,i) => <Card key={i} value={val}/>);
		const reciveCards = '';
		console.log('cards',this.state.cards.map((i) => <Card key={i}/>));
		return(
			<div>
			{cards}
			</div>
			);
	}
} 
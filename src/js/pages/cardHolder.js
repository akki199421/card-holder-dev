import React from "react";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GameCntrl from '../misc/gameCntrl';
import Card  from '../components/card';
import ReceiverCard  from '../components/receiverCard';
import { observe } from '../misc/game';
// import RecieverCards from '../components/card';


@DragDropContext(HTML5Backend)
export default class CardHolder extends React.Component{
	constructor(params){
		super(params);
		const {email} = params.params;
		//fetch saved state

		//create new state
		this.gameCntrl = new GameCntrl();
		const {cards, receiverCards} =  this.gameCntrl;
		this.state = {
			cards: cards,
			receiverCards: receiverCards
		};
		this.observerContainer = observe(this.handleCardMove.bind(this));
		this.logout.bind(this);
	}

	logout(){
		console.log('logged out');
	}

	reinit(){

	}

	handleCardMove(card){
		//card matched, find and delete it
		this.gameCntrl.findAndDelete(card);
		const {cards} =  this.gameCntrl;
		//update state
		this.setState({
			cards: cards,
		});

	}

	render(){
		console.log('render',this.state.cards);
		const cards = this.state.cards.map((data,i) => { if (data) return <Card key={i} value={data.value} ID={data.ID} /> });
		const receiverCards = this.state.receiverCards.map((data, i) => <ReceiverCard key={i} value={data.value} />);
		return(
			<div>
				<button onClick={this.logout}>Logout</button> 
				<div class="main-cards">
					{cards}
				</div>
				<div class="receiver-cards">
				{receiverCards}
				</div>
			</div>
			);
	}
} 
import Cards from '../components/cards';

export default class GameCntrl{
	constructor(state){
		if(state){
			this.cards = state.cards;
		}
		else
			{var {cards} = new Cards();
			this.cards = cards;	
			console.log('cards',cards);
			}
		
	}

}
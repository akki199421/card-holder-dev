import React from 'react';
import { DropTarget } from 'react-dnd';

import { canMove, moveCard } from '../misc/game';

const squareTarget = {
  canDrop(props) {
  	return true;
  },

  drop(props) {
  	moveCard(props);
  },
};

function collect(connect, monitor){
	return{
		connectDropTarget: connect.dropTarget(),
    	isOver: monitor.isOver(),
    	canDrop: monitor.canDrop(),
	};
}

@DropTarget('Card', squareTarget, collect)
export default class ReceiverCard extends React.Component{
	constructor(par){
		super();
		// console.log('RecieverCards in',par);
		this.state = {
			value : par.value
		};
	}
	render(){
		    const { connectDropTarget } = this.props;

		return connectDropTarget(
			<div class="card">{this.state.value}</div>
		);
	}
}


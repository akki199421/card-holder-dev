import React from 'react';
import { DragSource } from 'react-dnd';

import { setCard } from '../misc/game';

const cardSource = {
  beginDrag(prop) {
    setCard(prop);
    return {};
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  
  };
}

@DragSource('Card', cardSource, collect)
export default class Card extends React.Component{
	constructor(par){
		super();
		this.state = {
			value : par.value,
			ID: par.ID
		};
	}
	render(){
		    const { connectDragSource } = this.props;

		return connectDragSource(
			<div class="card">Card </div>
		);
	}
}

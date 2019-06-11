import React, { Component } from 'react';
import Cards from './Cards'
import AddCard from './AddCard'
import MoveCardPointer from './MoveCardPointer';


export class CardView extends Component {
    render() {
        return (
            <div>
                <Cards setCard={this.props.setCard} setDragged={this.props.setDragged} 
                       onDrop={this.props.onDrop} cards={this.props.cards} 
                       setAbove={this.props.setAbove} dropAbove={this.props.dropAbove}
                       currentSwimlane={this.props.currentSwimlane}/>
                <AddCard />
            </div>
        )
    }
}

export default CardView

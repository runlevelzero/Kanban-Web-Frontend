import React, { Component } from 'react'
import CardCommentView from './CardCommentView';
import CardAddComment from './CardAddComment';
import SetCardDueDate from './SetCardDueDate';

export class CardInfoContentSidebar extends Component {
    
    render() {
        return (
            <div class="additionalInformationSidebar">
                <div class="cardCommentContainer">
                    <CardCommentView deleteComment={this.props.deleteComment} updateComment={this.props.updateComment} comments={this.props.card.comments} />
                    <CardAddComment addComment={this.props.addComment}/>
                    <SetCardDueDate setDueDate={this.props.setDueDate} card={this.props.card} />
                </div>
            </div>
        )
    }
}

export default CardInfoContentSidebar

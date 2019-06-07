import React, { Component } from 'react'
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import CardComments from './CardComments';

export class CardCommentView extends Component {
    render() {
        return (
            <div className="cardComments">
                <CardComments deleteComment={this.props.deleteComment} comments={this.props.comments} />
            </div>
            
        )
    }
}

export default CardCommentView

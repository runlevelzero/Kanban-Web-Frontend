import React, { Component } from 'react'

export class CardComment extends Component {
    deleteComment = (evt) => {
        this.props.deleteComment(this.props.comment.id)
    }
    updateComment = (evt) => {
        this.props.updateComment(evt.currentTarget.value, this.props.comment.id)
    }
    loadText = (evt) => {
        if(evt.target.value === "") {
            console.log(this.props.comment)
            evt.target.value = this.props.comment[evt.target.name];
            this.setState({[evt.target.name]:this.props.comment[evt.target.name]});
        }
    }
    render() {
        return (
            <div class="cardComment">
                <textarea name="comment" onClick={this.loadText} placeholder={this.props.comment.comment} onChange={this.updateComment} class="cardComment">{this.props.comment.comment}</textarea>
                <p class="closeCardInfoButton" onClick={this.deleteComment}>x</p>
            </div>
        )
    }
}

export default CardComment

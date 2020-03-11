import React, { Component } from 'react';

import Comment from './comment';
class CommentForm extends Component {
    constructor(props){  // 想当以  getinitstate
        super(props);
        this.state={
            author: 'ss',
            text: 's'
        }
    }
    submit () {
        var author = this.state.author;
        var text = this.state.text;
        this.props.submit(author, text);
        this.state={
            author: '',
            text: ''
        }
    }
    change1 (e) {
        this.setState({author: e.target.value});
    }
    change2 (e) {
        this.setState({text: e.target.value});
        console.log(this.state.text);
    }
    render() {
        return (
            <form >
                <input type="text" value={this.state.author} onChange={this.change1.bind(this)}/>
                <input type="text" value={this.state.text} onChange={this.change2.bind(this)}/>
                <input type="button" onClick={this.submit.bind(this)}/>
            </form>
        );
    }
}
class CommentList extends Component {
    render() {
        var content = this.props.data.map(function (item) {
            return( <Comment author={item.author}  key={item.id}>
                    {item.text}
                     </Comment>);
        });
        return (
            <div className='commentForm'>
                {content}
            </div>
        );
    }
}

export {CommentList, CommentForm};


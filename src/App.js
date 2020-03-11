import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CommentList, CommentForm} from './list';

var data1 = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
class App extends Component {
        constructor(props) {
            super(props);
            this.state = {data: []}
       }
       componentDidMount () {
           console.log('ss');
           this.setState({data: data1});
       }
       submit (author, text) {
            console.log(author);
            var newdata = this.state.data.concat({author: author, id: text, text: text});
           this.setState({data: newdata});
       }
      render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <CommentForm submit={this.submit.bind(this)}  text="我是谁"/>
            <CommentList data={this.state.data}/>
          </div>
        );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


ReactDOM.render(
    <commentBox/>,
    document.getElementById('content')
);
var color = {
    name: 'lifang'
};
var b = color;
b.name = 'lifang1';
console.log(color);
// var color = {};
// color.c = 'red';
// function change(c) {
//    var temp = c;
//       c.c = 'blue';
//     temp.c = 'yellow';
//     console.log(temp, color.c, c.c);
//     return c
// }
// var hah = change(color);
// console.log(hah);
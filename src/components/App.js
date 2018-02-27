import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    notes: [
      { 
        date: new Date('2/12/2018'),
        text: 'Learn React'
      },
      { 
        date: new Date('2/27/2018'),
        text: 'Learn Redux'
      },
      { 
        date: new Date('3/23/2018'),
        text: 'Creat Cool Project'
      }
    ]
  };

  render() {
    const { date, text } = this.props;
    return (
      <div><h1>Hello Notes! Implement Me!</h1></div>
        <div>
          <ul className="notes">
            <li></li>
            <li></li>
          </ul>
      </div>
    );
  }
}
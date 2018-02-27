import React, { Component } from 'react';
import Notes from './Notes';
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
    const { notes } = this.state;
    
    return (
      <div>Hello Notes! Implement Me!
      <Notes notes={notes}/>
      </div>
    );
  }
}
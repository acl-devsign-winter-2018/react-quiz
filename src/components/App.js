import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';

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

    return (
      <Dashboard/>
     
    );
  }
}
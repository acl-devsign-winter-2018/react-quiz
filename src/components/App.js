import React, { Component } from 'react';
import './App.css';
import Notes from './Notes';
import NoteMaker from './NoteMaker';

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

  handleNewNote = (date, text) => {
    this.setState({ date, text });
  };

  render() {
    const { notes } = this.state;

    return (
      <div>
        <Notes notes={notes}/>
        <NoteMaker onNote={this.handleNewNote}/>
      </div>
    );
  }
}
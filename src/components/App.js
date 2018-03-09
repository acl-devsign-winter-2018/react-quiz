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

  newNote = dateKey=> {
    this.setState(state => ({
      text: state.text[dateKey]
    }));
  };

  render() {
    const { date, text } = this.state;
    return (
      <div>
        <header>
          <h1>NotePad</h1>
          <date 
            date={date}/>
        </header>
        <main>
          <text text={text} newNote={this.newNote}/>
        </main>
      </div>
    );
  }
}
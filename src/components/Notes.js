import React, { Component } from 'react';
import Note from './Note';

export default class Notes extends Component {

  state = {
  };

  render() {
    const { notes } = this.props;

    return (
      <ul>
        {notes.map((note, index) => 
          <Note key={index} note={note}/>
        )}
      </ul>
    );
  }
}
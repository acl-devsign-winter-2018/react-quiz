import React, { Component } from 'react';
import Note from './Note';

export default class Notes extends Component {

  render() {
    const { notes } = this.state;

    return (
      <ul>
        {notes.map((note, index) => {
          return <Note key={index} note={note}/>;
        })}

      </ul>
    );
  }
}


import React, { Component } from 'react';
import Note from './Note';

export default class Notes extends Component {
  render() {
    const { notes } = this.props;
    return (
      <ul>
        {notes.map((note, i) => (
          <Note key={i} note={note}/>
        ))}
      </ul>
    );
  }
}
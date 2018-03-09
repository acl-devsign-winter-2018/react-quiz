import React, { Component } from 'react';
import Note from './Note';

export default class Notes extends Component { 

  render() {
    const { notes } = this.props;
    const { date, text } = notes;

    return (
      <ul className="note-list">
        <Note note={notes}/>
      </ul>
    );
  }
}
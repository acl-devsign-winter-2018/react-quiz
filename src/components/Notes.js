import React, { Component } from 'react';
import Note from './Note';

export default class Notes extends Component { 

  render() {
    const { notes } = this.props;

    return (
      <ul className="note-list">
        <Note note={notes}/>
      </ul>
    );
  }
}
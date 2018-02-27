import React, { Component } from 'react';

export default class Notes extends Component {

  render() {
    const { notes } = this.props;

    return (
      <ul>
        {notes.map(note => <Note key={note.date} {...note}/>)}
      </ul>
    );
  }
}

class Note extends Component {
  render() {
    const { date, text } = this.props;
    return (
      <li> 
        <p><time>{date.toLocaleDateString()}</time> - {text}</p>
      </li>
    );
  }
}
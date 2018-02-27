import React, { Component } from 'react';
import Note from './Note';

export default class Notes extends Component {

  render () {
    const { notes, date, text } = this.props;

    return (
      <ul className="notes">
        {notes.map((note, i) => {
          console.log(note);
          return <Note key={i} date={date} text={text}/>
        })}

      </ul>
    )
  }
}

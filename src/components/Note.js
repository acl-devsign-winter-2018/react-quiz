import React, { Component } from 'react';

export default class Note extends Component {

  render() {
    const { note } = this.props;
    console.log(note);
    const { date } = note.date;
    const { text } = note.text;


    return (
      
      <li>
        <h3>{date}</h3>
        <p>{text}</p>
      </li>
     
    );
  }
}
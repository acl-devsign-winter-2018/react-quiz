import React, { Component } from 'react';
import Note from './Note';

export default class Note extends Component {

  render(){
    const { date, text } = this.props;

    return (
      <li>
        {date}
        {text}      
      </li>
    );
  }
}
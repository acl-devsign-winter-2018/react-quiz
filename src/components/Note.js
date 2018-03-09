import React, { Component } from 'react';

export default class Notes extends Component {

  state = {
  };

  render() {
    const { note } = this.props;
    const { date, text } = note;

    return (
      <li>
        <h2>{date.toString()}</h2>
        <p>{text}</p>
      </li>
    );
  }
}
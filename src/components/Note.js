import React, { Component } from 'react';

export default class Notes extends Component {

  state = {
  };

  render() {
    const { note } = this.props;
    const { date, text } = note;

    const parsedDate = date.toString;

    return (
      <li>
        <h2>{parsedDate}</h2>
        <p>{text}</p>
      </li>
    );
  }
}
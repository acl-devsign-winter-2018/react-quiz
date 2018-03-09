import React, { Component } from 'react';

export default class Note extends Component {

  render() {
    const { date, text } = this.props;

    return (
      <div className="note">
        <li>
          <h3>{text}</h3>
          <p>On {date}</p>
        </li>
      </div>
    )

  }
}
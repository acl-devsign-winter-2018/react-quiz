import React, { Component } from 'react';

export default class Notes extends Component{
  render() {
    const { text } = this.props;

    return (
      <div className="notes">
        <ul>
          <li>{text}</li>
        </ul>
      </div>
    );
  }
}
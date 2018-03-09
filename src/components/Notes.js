import React, { Component } from 'react';

export default class Notes extends Component{
  render() {
    const { notes } = this.props;
    console.log(this.props);

    return (
      <div className="notes">
        <ul>
          <li>{notes[0].text}</li>
          <li>{notes[1].text}</li>
          <li>{notes[2].text}</li>
        </ul>
      </div>
    );
  }
}
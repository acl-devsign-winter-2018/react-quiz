import React, { Component } from 'react';


export default class Note extends Component {

  render() {
    const { date, text } = this.props;
    console.log(date, text);
  
    return (
      <div>
        <li>
          <p>{text}<time> {date.toLocaleDateString()}</time></p>
          {/* <p><time>{date.toLocaleDateString()}</time> - {text}</p> */}
          {/* whyyyyyy is it so involved to render the date?! would note.date work better? no.. */}
        </li>
      </div>
    );
  }
}


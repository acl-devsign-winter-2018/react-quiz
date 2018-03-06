import React, { Component } from 'react';


export default class Note extends Component {

  render() {
    const { text } = this.props;
    console.log(text);
  
    return (
      <div>
        <li>
          <p>{text}</p>
          {/* <p><time>{date.toLocaleDateString()}</time> - {text}</p> */}
          {/* whyyyyyy is it so involved to render the date?! would note.date work better? no.. */}
        </li>
      </div>
    );
  }
}


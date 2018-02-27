import React, { Component } from 'react';


export default class Note extends Component { 

  render() {
    const { date, text } = this.props;

    return (
      <li>
        <h3>{date}</h3>
        <p>{text}</p>
      </li>  
    );
  }
}
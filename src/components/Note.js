import React, { Component } from 'react';


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
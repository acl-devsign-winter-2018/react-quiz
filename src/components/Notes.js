import React, { Component } from 'react';

export default class Notes extends Component {

  render(){
    const { notes } = this.props;
    
    return (
      <ul>
        {notes.map((data, i) => <Notes key={i} note={data}/>)}
      </ul>
    );
  }
}
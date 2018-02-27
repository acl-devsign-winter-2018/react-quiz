import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  render() {
    const { onNote } = this.props;

    return (
      <form onSubmit={({ target }) => onNote(target.value)}>
        <input/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
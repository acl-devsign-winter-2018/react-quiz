import React, { Component } from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import { addNote } from './actions/notesActions';

class Dashboard extends Component {

  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChange = ({  target  }) => {
    this.setState({ [target.name]: target.value });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    console.log('note added');
    this.props.addNote({
      ...this.state
    }); 
  };


  render() {
    const { notes } = this.props;


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name='text' onChange={this.handleChange}/>
          <button type="submit">Submit </button>
        </form>

        <ul>
          {notes.map((note) => {
            return <Note key={note.date} {...note}/>;
          })}
        </ul>

      </div>
    );
  }
}

export default connect(
  state => ({ notes: state.notes }),
  { addNote }

)(Dashboard);


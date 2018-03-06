import React, { Component } from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import addNote from './actions/notesActions';

class Dashboard extends Component {

  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChange = ({  target  }) => {
    this.setState({ [target.name]: target.value });;
  };
  
  // handleSubmit
  // event.preventDefault();
  // this.addNote({
  //   ...this.state
  // });;


  render() {
    const { notes, addNote } = this.props;


    return (
      <div>
        <form >
          {/* onSubmit={} */}
          <input name='text' onChange={handleAdd}> </input>
        </form>

        <ul>
          {notes.map((note) => {
            return <Note key={note.date} {...note}/>;
          })};
        </ul>

        <button type="submit"> </button>
      </div>
    );
  }
}

export default connect(
  state => ({ notes: state.notes }),
  { addNote }

)(Dashboard);


import { NOTE_ADD } from '../reducers/notesReducer';


export function addNote(note)
{
  return dispatch => {
    const action = {
      type: NOTE_ADD,
      payload: note
    };
    dispatch(action);
  };
}
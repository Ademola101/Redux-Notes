import React from 'react';
import {toggleImportanceIdOf} from '../reducers/noteReducer'

import {useDispatch, useSelector} from 'react-redux'
const Note = ({note, handleClick}) => {
  return (
    <div>
      

        <li onClick={handleClick}> {note.content} <strong> {note.important ? 'important' : ''}</strong></li>



    </div>
  );
}


const Notes = () => {

  const dispatch = useDispatch()
  const notes = useSelector(state => {
    if(state.filter === 'ALL') {
      return state.notes
    }
    return state.filter === 'IMPORTANT' ? state.notes.filter(note => note.important) : 
    state.notes.filter(note => !note.important)
  })

  return (
    <div>
      {notes.map (note => {
        return (
          <Note note={note} handleClick = {() => dispatch(toggleImportanceIdOf(note.id))}/>
        )

      
      })}
    </div>
  );
}




export default Notes;

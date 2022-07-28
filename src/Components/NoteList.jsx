import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toggleImportanceIdOf} from '../reducers/noteReducer'
import Note from './Note'
export default function NoteList() {

  const dispatch = useDispatch()
  const notes = useSelector(({notes, filter}) => {
    if(filter === 'ALL') {

      return notes
    }
    return filter === 'IMPORTANT' ? notes.filter(note => note.important) : 
    notes.filter(note => !note.important)
  })
  return (
    
    <div>
      {notes.map (note => {
        return (
          <Note key={note.id} note={note} handleClick = {() => dispatch(toggleImportanceIdOf(note.id))}/>
        )

      
      })}
    </div>

  )
}

import React from 'react'
import { useDispatch} from 'react-redux'

import {createNote} from '../reducers/noteReducer'
import noteService from '../services/note'

export default function NewNote(props) {
  const dispatch = useDispatch()

  const addNote = async (e) => {
    e.preventDefault()
  
    const content = e.target.note.value
    e.target.note.value = ''
    const note = noteService.creatNew(content)

    dispatch(

      
      createNote(note)
    )
  
  }

  return (
    <form onSubmit={addNote}>
<input name='note'/>

<button >addNote</button>
    </form>
  )
}

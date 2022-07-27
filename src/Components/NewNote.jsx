import React from 'react'
import { useDispatch} from 'react-redux'

import {createNote} from '../reducers/noteReducer'

export default function NewNote(props) {
  const dispatch = useDispatch()

  const addNote = async (e) => {
    e.preventDefault()
  
    const content = e.target.note.value
    e.target.note.value = ''
    dispatch(
      createNote(content)
    )
  
  }

  return (
    <form onSubmit={addNote}>
<input name='note'/>

<button >addNote</button>
    </form>
  )
}

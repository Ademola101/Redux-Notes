import {createSlice} from '@reduxjs/toolkit'
//  const initialState = [
//   {
//     content: 'reducer defines how redux store works',
//     important: true,
//     id: 1,
//   },
//   {
//     content: 'state of store can contain any data',
//     important: false,
//     id: 2,
//   },
// ]



const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    createNote(state, action) {
      return [...state, action.payload]
      
    },

    toggleImportanceOf(state, action) {
      const id = action.payload
      const noteToChange = state.find(note => note.id === id)
      const changedNote = {...noteToChange, important: !noteToChange.important }
      return (state.map(note => note.id !== id ? note : changedNote))
    },

    appendNote(state, action) {
      return state.push(action.payload)
    },

    setNotes(state, action) {
      return action.payload
      // replace the initial note
    }
  }
})

// const generateId = () => {
//   return  Math.floor(Math.random() * 100 )
//  }
 
export const {createNote, toggleImportanceIdOf, appendNote, setNotes} = noteSlice.actions
export default noteSlice.reducer
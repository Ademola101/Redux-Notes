
const noteReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]
    case 'TOGGLE_IMPORTANCE' : {
      const id = action.data.id
      const noteToChange = state.find(d => d.id === id)
      const changedNote = {...noteToChange, importance: !noteToChange.importance}
      return state.map(note => note.id !== changedNote.id ? note : changedNote)
    }
    
    default:
      return state
  }
}


export default noteReducer
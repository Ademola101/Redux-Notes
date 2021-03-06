
const noteReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]
    case 'TOGGLE_IMPORTANCE' : {
      const id = action.data.id
      const noteToChange = state.find(d => d.id === id)
      const changedNote = {...noteToChange, important: !noteToChange.important}
      return state.map(note => note.id !== id ? note : changedNote)
    }
    
    default:
      return state
  }
}
const generateId = () => {
  return  Math.floor(Math.random() * 100 )
 }
 
export const createNote = (content) => {

  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: generateId()
    }
  }

}

export const toggleImportanceIdOf = (id) => {
  return ({
    type: 'TOGGLE_IMPORTANCE',
    data: {id}
  })
}

export default noteReducer
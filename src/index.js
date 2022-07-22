import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import noteReducer from './reducers/noteReducer';



import { createStore} from 'redux'

const store = createStore(noteReducer)

const generateId = () => {
 return  Math.floor(Math.random() * 100 )
}



const toggleImportanceIdOf = (id) => {
  return ({
    type: 'TOGGLE_IMPORTANCE',
    data: {id}
  })
}
const createNote = (content) => {

  return {
    type: 'NEW_NOTE',
    data: {
      content,
      important: false,
      id: generateId()
    }
  }

}

store.dispatch({
  type: 'NEW NOTE',
  data: {
    content: 'the app state is in redux store',
    important: true,
    id: 1
  }
})
store.dispatch({
  type: 'NEW NOTE',
  data: {
    content: 'state changes are made with actions',
    important: false,
    id: 2
  }
})


const addNote = (e) => {
  e.preventDefault()

  const content = e.target.note.value
  e.target.note.value = ''
  store.dispatch(

    createNote(content)
  )

}


const toggleImportance = (id) => {
  store.dispatch(toggleImportanceIdOf(id))
}
function App() {
  return (
  <div> 

    <form onSubmit={addNote}>
<input name='note'/>

<button >addNote</button>
    </form>
<ul>
  {store.getState().map(note => {
    return <li onClick={() => {toggleImportance(note.id)}} key={note.id}> {note.content}  <strong> {note.important ? 'note' : ''}</strong></li>
  })}
</ul>

  </div>
    );
}




const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
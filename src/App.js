import {createNote, toggleImportanceIdOf} from './reducers/noteReducer'
import {useSelector, useDispatch} from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const note = useSelector(state => state)

  const addNote = (e) => {
    e.preventDefault()
  
    const content = e.target.note.value
    e.target.note.value = ''
    dispatch(
  
      createNote(content)
    )
  
  }


  const toggleImportance = (id) => {
    dispatch(toggleImportanceIdOf(id))
  }
  
  return (
  <div> 

    <form onSubmit={addNote}>
<input name='note'/>

<button >addNote</button>
    </form>
<ul>
  {note.map(note => {
    return <li onClick={() => {toggleImportance(note.id)}} key={note.id}> {note.content}  <strong> {note.important ? 'note' : ''}</strong></li>
  })}
</ul>

  </div>
    );
}

export default App
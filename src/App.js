import NewNote from './Components/NewNote'
import VisibilityFilter from './Components/VisibilityFilter';
import {useEffect} from 'react'
import {setNotes} from './reducers/noteReducer'
import noteService from './services/note';
import {useDispatch} from 'react-redux'
import NoteList from './Components/NoteList';


function App() {

  const dispatch = useDispatch()

  
  useEffect(() => {


    noteService.getAll().then((notes) => dispatch(setNotes(notes)))
  }, [dispatch])

  


  
  return (
  <div> 
<NewNote/>
<VisibilityFilter/>
    <NoteList/>
  </div>
    );
}

export default App
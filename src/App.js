import NewNote from './Components/NewNote'
import Notes from './Components/Note'
import VisibilityFilter from './Components/VisibilityFilter';
import {useEffect} from 'react'
import {setNotes} from './reducers/noteReducer'
import noteService from './services/note';
import {useDispatch} from 'react-redux'


function App() {

  const dispatch = useDispatch()

  
  useEffect(() => {


    noteService.getAll().then((notes) => dispatch(setNotes(notes)))
  }, [dispatch])

  


  
  return (
  <div> 
<NewNote/>
<VisibilityFilter/>
    <Notes/>
  </div>
    );
}

export default App
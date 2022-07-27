import NewNote from './Components/NewNote'
import Notes from './Components/Note'
import VisibilityFilter from './Components/VisibilityFilter';
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { initializeNotes } from './reducers/noteReducer';


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeNotes())
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
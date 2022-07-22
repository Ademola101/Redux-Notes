import {createNote, toggleImportanceIdOf} from './reducers/noteReducer'
import {useSelector, useDispatch} from 'react-redux'

import NewNote from './Components/NewNote'
import Notes from './Components/Note'

function App() {
 
  return (
  <div> 
<NewNote/>
    <Notes/>
  </div>
    );
}

export default App
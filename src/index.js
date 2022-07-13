import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { createStore} from 'redux'

const noteReducer = (state = [], action) => {
  if (action.type === 'NEW NOTE') {
     state.push(action.data)
     return state
  }
return state
}

const store = createStore(noteReducer)

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
function App() {
  return (
  <div> 
<ul>
  {store.getState().map(note => {
    return <li key={note.id}> {note.content}  <strong> {note.important ? 'note' : ''}</strong></li>
  })}
</ul>

  </div>
    );
}



const root = () => ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


root()
store.subscribe(root)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

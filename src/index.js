import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import './index.css';
import noteReducer, {setNotes} from './reducers/noteReducer';
import filterReducer from './reducers/FilterReducer'
import App from './App';
import {filterChange} from './reducers/FilterReducer'
import {createNote} from './reducers/noteReducer'
import {configureStore} from '@reduxjs/toolkit'
import noteService from './services/note';





const store = configureStore({
  reducer: {
    notes: noteReducer,
  filter: filterReducer

  }
})


noteService.getAll().then((notes) => {

  store.dispatch(setNotes(notes))

})







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




store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)// renderApp()
// store.subscribe(renderApp)
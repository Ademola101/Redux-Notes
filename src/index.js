import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { createStore} from 'redux'

const counterReducer = (state = 0, action) => {

  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state -1
      case 'ZERO':
        return 0
        default:
          return state
  }
}
const store = createStore(counterReducer)

console.log(store.getState());
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
console.log(store.getState());
function App() {
  return (
  <div> 


    <div>
      {store.getState()}
    </div>
    <button onClick={e => store.dispatch({type: 'INCREMENT'})}> plus </button>
    <button onClick={e => store.dispatch({type: 'DECREMENT'})}> minus</button>
    <button onClick={e => store.dispatch({type: 'ZERO'})}> zero </button>
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

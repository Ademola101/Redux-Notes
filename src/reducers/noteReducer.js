
const noteReducer = (state = [], action) => {
  if (action.type === 'NEW NOTE') {
     return state.concat(action.data)
     
  }
return state
}


export default noteReducer
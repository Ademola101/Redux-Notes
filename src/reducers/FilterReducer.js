const filterReducer = (state = 'ALL', action) => {
  switch (action.type)  {
    case 'SET_FILTER':
       return action.filter 
      //  replaced the ALL with whatever is passed as the function of the filter change
      default:
        return state
  }

}



export const filterChange = (filter) => {
  return(
    {
type: 'SET_FILTER',
filter

    }
  )

}


export default filterReducer
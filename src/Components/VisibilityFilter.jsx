import React from 'react'
import {useDispatch} from 'react-redux'
import filterReducer from '../reducers/FilterReducer';
import { filterChange } from '../reducers/FilterReducer';
export default function VisibilityFilter() {

  const dispatch = useDispatch()
  
 
  return (
    <div>
  all <input type='radio' name='filter' onChange={() => dispatch(filterChange('ALL'))}/>
  important <input type='radio' name='filter' onChange={() =>dispatch (filterChange('IMPORTANT'))}/>
  nonimortant <input type='radio' name='filter' onChange={() => dispatch (filterChange('NONIMPORTANT'))}/>
</div>

  )
}

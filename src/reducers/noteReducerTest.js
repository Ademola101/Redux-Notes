import noteReducer from "./noteReducer";
import deepFreeze from "deep-freeze";

describe('noteReducer', () => { 


  test('return new state with the action of NEW_NOTE', () => { 

    const state = []
    const action = {
      type: 'NEW_NOTE',
      data: {
        content: 'the app state is in redux store',
        important: true,
        id: 1
      }
    }
  })
 })
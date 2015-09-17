
/*
State =
{
  articals = [
    { name: "name", id: 0, tags: [ { id: 0, name: "ReactJs" } ] }
  ]
}
*/
import { combineReducers } from 'redux'
import { Actions, SortType } from '../action/actionArtical'
import { articalsData, sortData, tagData } from '../data/json.js'

function FilterArtical ( state = articalsData, action ) {
  switch (action.type) {
  case Actions.SET_FILTER:
    const newState = articalsData.filter( artical => {
      for ( const item of artical.tags ) {
        if ( item._id === action.filterId ) {
          return true
        }
      }
      return false
    })
    return newState
    break
  default:
    return state
  }
}

function SortArtical ( state = SortType.SORT_FOLLOW, action  ) {
  switch (action.type) {
  case Actions.SET_SORT:
    return action.code
    break
  default:
    return state
  }
}

const reducerArtical = combineReducers( { FilterArtical, SortArtical } )

export default reducerArtical

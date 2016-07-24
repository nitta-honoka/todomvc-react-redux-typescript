
import { handleActions, Action } from 'redux-actions'
const { assign } = require('lodash')

import { Todo, Todos, Payload } from '../model'
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../constant/action-types'

const initState: Todos = [{
  text: 'niconiconi',
  completed: false,
  id: 0
}]

export default handleActions<Todos, {}>({
  [ADD_TODO]: (state: Todos, action: Action<Payload>) => {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: action.payload.text
    }, ...state]
  },

  [DELETE_TODO]: (state: Todos, action: Action<Payload>) => {
    return <Todos>state.filter(todo => todo.id !== action.payload.id)
  },

  [EDIT_TODO]: (state: Todos, action: Action<Payload>) => {
    return <Todos>state.map(todo => {
      return todo.id === action.payload.id
        ? assign({}, todo, {text: action.payload.text})
        : todo
    })
  },

  [COMPLETE_TODO]: (state: Todos, action: Action<Payload>) => {
    return <Todos>state.map(todo => {
      return todo.id === action.payload.id
        ? assign({}, todo, {completed: true})
        : todo
    })
  },

  [COMPLETE_ALL]: (state: Todos) => {
    const areAllMarked = state.every(todo => todo.completed)
    return <Todos>state.map(todo => assign({}, todo, {completed: !areAllMarked}))
  },

  [CLEAR_COMPLETED]: (state: Todos) => {
    return <Todos>state.filter(todo => todo.completed === false)
  }
}, initState)

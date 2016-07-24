
import { createAction } from 'redux-actions'
const { assign } = require('lodash')

import { Todo } from '../model'

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../constant/action-types'

export const addTodo = createAction<Todo>(
  ADD_TODO,
  (text: string) => ({text, completed: false})
)

export const deleteTodo = createAction<Todo>(
  DELETE_TODO,
  (todo: Todo) => todo
)

export const editTodo = createAction<Todo>(
  EDIT_TODO,
  (todo: Todo, newText: string) => assign({}, todo, {text: newText})
)

export const completeTodo = createAction<Todo>(
  COMPLETE_TODO,
  (todo: Todo) => todo
)

export const completeAll = createAction<Todo>(
  COMPLETE_ALL
)

export const clearCompleted = createAction<Todo>(
  CLEAR_COMPLETED
)

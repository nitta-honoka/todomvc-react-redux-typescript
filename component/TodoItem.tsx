
import TodoInput from './TodoInput'

import * as classNames from 'classnames'
import * as React from 'react'

import { Todo } from '../model'

interface TodoItemProps {
  todo: Todo
  editTodo: (todo: Todo, text: string) => void
  deleteTodo: (todo: Todo) => void
  completeTodo: (todo: Todo) => void
  key?: any
}
interface TodoItemState {
  editing: boolean
}

class TodoItem extends React.Component<TodoItemProps, TodoItemState> {
  constructor(props) {
    super(props)

    this.state = {editing: false}
  }

  handleSave(todo: Todo, text: string) {
    const { deleteTodo, editTodo } = this.props
    if (text.length) {
      deleteTodo(todo)
    } else {
      editTodo(todo, text)
    }
    this.setState({editing: false})
  }

  render() {
    const {
      completeTodo,
      deleteTodo,
      todo
    } = this.props
    const { editing } = this.state

    let element
    if (editing) {
      element = (
        <TodoInput text={todo.text} editing={editing}
          onSave={text => this.handleSave(todo, text)} />
      )
    } else {
      element = (
        <div className='view'>
          <input type='checkbox' className='toggle' checked={todo.completed}
            onChange={() => completeTodo(todo)} />
          <label onDoubleClick={() => this.setState({editing: true})}>
            {todo.text}
          </label>
          <button className='destory' onClick={() => deleteTodo(todo)} />
        </div>
      )
    }

    return (
      <li className={classNames({completed: todo.completed, editing})}>
        {element}
      </li>
    )
  }
}

export default TodoItem

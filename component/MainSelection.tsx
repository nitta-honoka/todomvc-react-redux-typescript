
import TodoItem from './TodoItem'
import Footer from './Footer'

import * as React from 'react'

import { Todo } from '../model'

import {
  SHOW_COMPLETED,
  SHOW_ACTIVE,
  SHOW_ALL
} from '../constant/todo-filters'

const TODO_FILTERS = {
  [SHOW_COMPLETED]: (todo: Todo) => todo.completed,
  [SHOW_ACTIVE]: (todo: Todo) => !todo.completed,
  [SHOW_ALL]: () => true
}

interface MainSelectionProps {
  editTodo: (todo: Todo, text: string) => void
  completeTodo: (todo: Todo) => void
  deleteTodo: (todo: Todo) => void
  clearCompleted: () => void
  completeAll: () => void
  todos: Todo[]
}
interface MainSelectionState {
  filter: string
}

class MainSelection extends React.Component<MainSelectionProps, MainSelectionState> {
  state = {
    filter: SHOW_ALL
  }

  handleClearCompleted() {
    const { clearCompleted, todos } = this.props

    const atLeastOneCompleted = todos.some(todo => todo.completed)
    if (atLeastOneCompleted) {
      clearCompleted()
    }
  }

  renderToggleAll(completedCount) {
    const { completeAll, todos } = this.props

    if (todos.length) {
      return (
        <input type='checkbox' className='toggle-all'
          checked={completedCount === todos.length}
          onChange={() => completeAll()} />
      )
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer {...{completedCount, activeCount, filter}}
          onClearCompleted={() => this.handleClearCompleted()}
          onShow={filter => this.setState({filter})} />
      )
    }
  }

  render() {
    const {
      completeTodo,
      deleteTodo,
      editTodo,
      todos
    } = this.props

    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo): number =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <section className='main'>
        {this.renderToggleAll(completedCount)}
        <ul className='todo-list'>
        {
          filteredTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} editTodo={editTodo}
              completeTodo={completeTodo} deleteTodo={deleteTodo} />
          ))
        }
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    )
  }
}

export default MainSelection

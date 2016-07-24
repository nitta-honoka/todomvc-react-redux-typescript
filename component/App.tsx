
import MainSelection from './MainSelection'
import Header from './Header'

import * as React from 'react'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  addTodo,
  editTodo,
  deleteTodo,
  completeAll,
  completeTodo,
  clearCompleted
} from '../action'

import { Todo } from '../model'

interface AppProps {
  todo: Todo[]
  dispatch: Dispatch<any>
}

class App extends React.Component<AppProps, {}> {
  render() {
    const { todo, dispatch } = this.props

    return (
      <div className='todoapp'>
        <Header addTodo={(text: string) => dispatch(addTodo(text))} />
        <MainSelection todos={todo}
          editTodo={(t: Todo, s) => dispatch(editTodo(t, s))}
          deleteTodo={(t: Todo) => dispatch(deleteTodo(t))}
          completeTodo={(t: Todo) => dispatch(completeTodo(t))}
          completeAll={() => dispatch(completeAll())}
          clearCompleted={() => dispatch(clearCompleted())} />
      </div>
    )
  }
}

const mapState = state => ({
  todo: state.todo
})

export default connect(mapState)(App)

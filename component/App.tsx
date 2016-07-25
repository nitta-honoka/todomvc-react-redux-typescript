
import MainSelection from './MainSelection'
import Header from './Header'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import * as React from 'react'

import {
  clearCompleted,
  completeTodo,
  completeAll,
  deleteTodo,
  editTodo,
  addTodo
} from '../action'

import { Todo } from '../model'

interface AppProps {
  dispatch: Dispatch<any>
  todo: Todo[]
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

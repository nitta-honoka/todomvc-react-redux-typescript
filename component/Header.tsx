
import TodoInput from './TodoInput'

import * as React from 'react'

interface HeaderProps {
  addTodo: (text: string) => any
  text?: string
}

class Header extends React.Component<HeaderProps, {}> {
  handleSave(text: string) {
    const { addTodo } = this.props
    if (text) {
      addTodo(text)
    }
  }

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <TodoInput newTodo={true}
          onSave={text => this.handleSave(text)}
          placeholder='add some todo' />
      </header>
    )
  }
}

export default Header

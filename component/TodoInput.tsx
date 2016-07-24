
import * as classNames from 'classnames'
import * as React from 'react'

interface TodoInputProps {
  onSave: (text: string) => any
  text?: string
  placeholder?: string
  editing?: boolean
  newTodo?: boolean
}

interface TodoInputState {
  text: string
}

class TodoInput extends React.Component<TodoInputProps, TodoInputState> {
  constructor(props) {
    super(props)

    this.state = {
      text: this.props.text || ''
    }
  }

  handleBlur(e) {
    const { onSave, newTodo } = this.props

    if (!newTodo) {
      onSave(e.target.value)
    }
  }

  handleSubmit(e) {
    const { onSave, newTodo } = this.props

    if (e.which === 13) {
      onSave(e.target.value)
      if (newTodo) {
        this.setState({text: ''})
      }
    }
  }

  handleChange(e) {
    this.setState({text: e.target.value})
  }

  render() {
    const {
      placeholder,
      newTodo,
      editing
    } = this.props

    const { text } = this.state

    return (
      <input className={classNames({edit: editing, 'new-todo': newTodo})}
        type='text' placeholder={placeholder} autoFocus={true} value={text}
        onBlur={e => this.handleBlur(e)}
        onChange={e => this.handleChange(e)}
        onKeyDown={e => this.handleSubmit(e)} />
    )
  }
}

export default TodoInput


import * as classNames from 'classnames'
import * as React from 'react'

import {
  SHOW_COMPLETED,
  SHOW_ACTIVE,
  SHOW_ALL
} from '../constant/todo-filters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

interface FooterProps {
  completedCount: number
  activeCount: number
  filter: string
  onClearCompleted: () => void
  onShow: (filter: string) => void
}

class Footer extends React.Component<FooterProps, {}> {
  renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <span className='todo-count'>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    )
  }

  renderFilterLink(filter: string) {
    const {
      onShow,
      filter: selectedFilter
    } = this.props
    const title = FILTER_TITLES[filter]

    return (
      <a className={classNames({selected: filter === selectedFilter})}
        style={{cursor: 'pointer'}}
        onClick={() => onShow(filter)}>
        {title}
      </a>
    )
  }

  renderClearBtn() {
    const { onClearCompleted, completedCount } = this.props
    if (completedCount > 0) {
      return (
        <button className='clear-completed'
          onClick={() => onClearCompleted()}>
          Clear Completed
        </button>
      )
    }
  }

  render() {
    return (
      <footer className='footer'>
        {this.renderTodoCount()}
        <ul className='filters'>
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter => (
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          ))}
        </ul>
        {this.renderClearBtn()}
      </footer>
    )
  }
}

export default Footer


import 'todomvc-app-css/index.css'

import { createStore, Store } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import * as React from 'react'

import rootReducer from './reducer'
import App from './component/App'

const store: Store<any> = createStore(rootReducer, {})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

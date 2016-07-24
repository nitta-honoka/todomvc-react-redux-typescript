
import 'todomvc-app-css/index.css'

import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, Store } from 'redux'

import App from './component/App'
import rootReducer from './reducer'

const initState = {}
const store: Store<any> = createStore(rootReducer, initState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

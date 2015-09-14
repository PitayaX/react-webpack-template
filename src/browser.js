import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './components/reducer/reducerArticals'

const store = createStore(reducer)

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>
  , document.getElementById('root'))

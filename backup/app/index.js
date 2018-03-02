import React from 'react'
import { render } from 'react-dom'
import getRoutes from './config/routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import users from 'redux/modules/users'
import thunk from 'redux-thunk'
import restricted from 'helpers/restricted'

const store = createStore(users, applyMiddleware(thunk))

function checkAuth (component) {
  return restricted(component, store)
}

render (
  <Provider store={store}>
    {getRoutes(checkAuth)}
  </Provider>,
  document.querySelector('#app')  
)

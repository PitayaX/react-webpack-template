import React, { PropTypes } from 'react'
import Router from 'react-router'
import Routes from './components/Route.js'


Router.run(Routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>,  document.getElementById('root'))
})


/* const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="post" path="/post" handler={Post}/>
    <Route name="login" path="/login" handler={Login}/>
  </Route>
)
*/

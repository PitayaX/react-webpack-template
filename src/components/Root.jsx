import React, { PropTypes } from 'react'
import { Router, Link, RouteHandler } from 'react-router'
import ThemeReact, { Navbar, Nav } from 'react-bootstrap'
import ThemeRouter, { NavItemLink } from 'react-router-bootstrap'
import Layout from './layout/Layout'
import '../less/site.less'

export default class RootHandler extends React.Component {
  constructor (props) {
    super (props)
  }
  render () {
    return(
        <Layout />
      )
  }
}
/* const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="post" path="/post" handler={Post}/>
    <Route name="login" path="/login" handler={Login}/>
  </Route>
)
*/
/*
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('root'))
})
*/
/*
<Router>
    <Route name='explore' path='/' component={App}>
     <Route name='repo' path='/:login/:name' component={RepoPage} />
     <Route name='user' path='/:login' component={UserPage} />
    </Route>
</Router>
*/

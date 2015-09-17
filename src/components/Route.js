import React from 'react'
import { Route, RouteHandler, DefaultRoute, Link, NotFoundRoute } from 'react-router'
import RootHandler from './Root'
import PostHandler from './pages/PostPage'
import LoginHandler from './pages/LoginPage'
import NotFoundHandler from './trash/NotFound'
import HomeHandler from './trash/Home'

const Routes=(
  <Route name="root" path="/" handler={RootHandler}>
    <DefaultRoute handler={HomeHandler} />
    <Route name="post" path="/post" handler={PostHandler}/>
    <Route name="login" path="/login" handler={LoginHandler}/>
    <Route name="home" path="/home" handler={HomeHandler}/>
    <NotFoundRoute name="not-found" handler={NotFoundHandler}/>
   </Route>
)
export default Routes

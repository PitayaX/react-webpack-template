import React, { propTypes } from 'react'
import $ from 'jquery'
import Loading from '../../utils/loading'
import PostSort from './postsort'
import PostList from './postList'

const PostContainer = React.createClass({
  propTypes: {
    isLoaded: React.PropTypes.bool,
    apiUrl: React.PropTypes.string.isRequired,
    posts: React.PropTypes.object,
    currentTagId: React.PropTypes.number
  },

  getInitialState () {
    return {
      isLoaded: false,
      apiUrl: "/src/data/posts.json",
      posts: {},
      currentTagId: 1
    }
  },

  loadPostsFromServer () {
      $.ajax({
        url: this.props.apiUrl,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          this.setState({ posts: data, isLoaded: true })
        }.bind(this)
      })
    },

  componentDidMount () {
      setTimeout(() => this.loadPostsFromServer(),
          8000
        )
    },
  componentWillReceiveProps (nextProps) {
    this.setState({ isLoaded: false })
  },
  componentDidUpdate  (prevProps, prevState) {
    setTimeout(() => this.loadPostsFromServer(),
        6000
      )
  },

  render () {
    console.log(this.state.isLoaded)
    let loading=null
    if (!this.state.isLoaded) {
      loading= <Loading className="spinner" />
    }
    else {
      loading=  <PostList data={this.state.posts.posts} tagID={this.state.currentTagId} />
    }
    return (
      <div className="post-container">
        <PostSort />
        {loading}
      </div>
    )
  }
})
export default PostContainer

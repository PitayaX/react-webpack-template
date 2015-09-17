import React, { propTypes } from 'react'
import PostItem from './postitem'

const PostList = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    tagID: React.PropTypes.number
  },
  getInitialState () {
    return {
      data: [],
      tagID: 1
    }
  },
  componentWillReceiveProps () {
    /*  console.log(this.props.tagID) */
  },
  render () {
    const _currentTagId=this.props.tagID

    const dataList=this.props.data.filter(function (item) {
      return item.tagid===_currentTagId
    })
    const  postList = dataList.map(function (post, index) {
        return (
          <PostItem title={post.title} brief={post.brief} id={post.id} />
        )
      })
    return (
      <div className="post-list-container">
        <ul>
          {postList}
        </ul>
      </div>
    )
  }
})
export default PostList

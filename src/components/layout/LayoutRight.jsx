import React, { propTypes } from 'react'
import TagContainer from '../controls/tag/tagcontainer'
import PostContainer from '../controls/post/postcontainer'

const LayoutRight= React.createClass({
  propTypes: {
    currentTagId: React.PropTypes.number
  },

  onClick (tagId) {
    this.refs.postContainer.setState({ currentTagId: tagId })
  },
  getInitialState () {
    return {
      currentTagId: 1
    }
  },
  render () {
    return (
    <div>
       <TagContainer apiUrl="/src/data/tags.json" onClick={this.onClick} />
       <PostContainer apiUrl="/src/data/posts.json"  currentTagId={this.state.currentTagId} ref="postContainer"/>
    </div>
    )
  }
})
export default LayoutRight

import React, { propTypes } from 'react'
import TagItem from './tagitem'

const TagList= React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    onClick: React.PropTypes.func
  },
  getDefaultProps () {
    return {
      data: [],
      currentSelectedTagId: 1
    }
  },
  getInitialState () {
    return {
      tagIndex: 1
    }
  },
  handleClick (tagId, index) {
    this.setState({ tagIndex: index })
    this.props.onClick(tagId)
  },
  render () {
    const  tagList = this.props.data.map(function (tag, index) {
      const tagItemClass=this.state.tagIndex===index?'active': ''
      return (
          <TagItem tagIndex={index} className={tagItemClass} tagId={tag.id} tagName={tag.tagName} onClick={this.handleClick} />
        )
    }, this)

    return (
      <div className="tag-list">
        <ul>
          {tagList}
        </ul>
      </div>
    )
  }
})
export default TagList

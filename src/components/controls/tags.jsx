import React, { PropTypes as T } from 'react'
import CNames from 'classnames'
import Tag from './tag'
import '../css&less/tag.less'

const Tags = React.createClass({
  propTypes: {
    data: T.array.isRequired,
    onClick: T.func
  },
  getInitialState () {
    return { activeId: null }
  },
  render () {
    debugger
    const { data, onClick, ...others } = this.props
    const tags = data.map( (item) => {
      return (
        <a className={
            CNames("tag-hot", { "active": this.state.activeId === item.id })
          }
          onClick={this.onClickHandler(item)}>{item.name}</a>
      )
    })
    return ( <div>{tags}</div> )
  },

  onClickHandler (tagData) {
    return (e) => {
      this.setState({ activeId: tagData.id })

      this.props.onClick && this.props.onClick(tagData, e)
    }
  }
})

export default Tags

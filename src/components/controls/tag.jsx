import React, { PropTypes as T } from 'react'
import CNames from 'classnames'
import '../css&less/tag.less'

const Tag = React.createClass({
  propTypes: {
    onClick: T.func,
    isActived: T.bool
  },
  render () {
    return ( <span><a className={CNames("tag-hot", { "active": this.props.isActived === true })}
    onClick={this.props.onClick}>aa</a></span> )
  }
})

export default Tag

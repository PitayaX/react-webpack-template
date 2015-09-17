import React, { PropTypes as T } from 'react'
import CName from 'classnames'
import '../css&less/panel.less'

const Panel = React.createClass({
  propTypes: {
    title: T.string,
    titleUrl: T.string,
    children: T.node,
    className: T.string
  },

  render () {
    const { className, title, titleUrl, children, ...others } = this.props
    return (<div className={CName("panel-container", this.props.className)} {...others}>
              <div className="panel-top">
                <a href={this.props.titleUrl}>{this.props.title}</a>
              </div>
              <div className="panel-main">
                {this.props.children}
              </div>
            </div>)
  }
})

export default Panel

import React from 'react'
import 'less/article.less'

const FontIcon = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    fontClass: React.PropTypes.string
  },
  render () {
    return(
      <a href="#" >
        <div className={this.props.className}>
          <i className={this.props.fontClass}></i>
        </div>
      </a>
  )
  }
})
export default FontIcon

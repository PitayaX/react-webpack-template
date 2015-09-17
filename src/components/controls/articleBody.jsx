import React from 'react'
import 'less/article.less'

const ArticleBody = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    text: React.PropTypes.string
  },
  render () {
    this.props.id = this.props.id || 'articleBody'
    this.props.className = this.props.className || 'articleBody'
    return (
      <div id={this.props.id} className={this.props.className}>
          {this.props.text}
      </div>
    )
  }
})

export default ArticleBody

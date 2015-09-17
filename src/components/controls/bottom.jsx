import React from 'react'
import 'less/article.less'
const Bottom=React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    className: React.PropTypes.string
  },
  render () {
    this.props.id = this.props.id || 'bottom'
    this.props.className= this.props.className || 'bottom'
    return(
      <div id={this.props.id} className={this.props.className}>
          <p>
            Design & Supported by PitayaX Open Source Team
          </p>
          <p>
            Email:admin@pitayaX.net
          </p>
          <p>
            GitHub: github.com/organizations/PitayaX
          </p>
      </div>
    )
  }
})
export default Bottom

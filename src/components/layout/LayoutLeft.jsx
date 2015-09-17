import React, { propTypes } from 'react'
import Navbar from '../nav/navbar'

const LayoutLeft= React.createClass({
  propTypes: {
    children: React.PropTypes.instanceOf(Navbar)
  },
  render () {
    return (
      <div>
          {this.props.children}
      </div>
    )
  }
})
export default LayoutLeft

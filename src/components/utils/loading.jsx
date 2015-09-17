import React, { propTypes } from 'react'
import Spinner from 'react-spinkit'

const Loading= React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },
  getInitialState () {
    return {
      className: "circle"
    }
  },
  render () {
    return (
      <div className="loading-container">
        <Spinner spinnerName="circle" overrideSpinnerClassName={this.props.className} />
      </div>
    )
  }
})
export default Loading

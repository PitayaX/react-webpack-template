import React, { PropTypes } from 'react'
import SmartButton from './controls/button'
import 'less/site.less'

const Demo = React.createClass({
  getInitialState () {
    return {
      buttonState: 1
    }
  },
  render () {
    return (
      <div className='container'>
        <h2>Demo page</h2>
        <div className='section'>
          <SmartButton className='btn-ghost btn-primary' onClick={this._handleClick}
            state={this.state.buttonState}>{this._getButtonContent()}</SmartButton>
          <SmartButton className='btn-ghost btn-success'>按钮1</SmartButton>
          <SmartButton className='btn-ghost btn-warning'>按钮2</SmartButton>
          <SmartButton className='btn-ghost btn-error' onClick={this._handleAnotherClick}>按钮3</SmartButton>
        </div>
        <div className='section'>
          <SmartButton className='btn btn-default'>按钮00</SmartButton>
          <SmartButton className='btn btn-primary'>按钮0</SmartButton>
          <SmartButton className='btn btn-success'>按钮1</SmartButton>
          <SmartButton className='btn btn-warning'>按钮2</SmartButton>
          <SmartButton className='btn btn-error'>按钮3</SmartButton>
          {/* disabled */}
          <SmartButton className='btn btn-error' state={-1}>按钮4</SmartButton>
        </div>
      </div>
    )
  },
  _handleClick () {
    this.setState({ buttonState: 0 })
    // delay 3s
    setTimeout(() => {
      this.setState({ buttonState: 1 })
    }, 3000)
  },
  _handleAnotherClick () {
    this.setState({ buttonState: -this.state.buttonState })
  },
  _getButtonContent () {
    if (this.state.buttonState === 0) {
      return (
        <span>测试按钮<i className='fa fa-spinner rotate infinite'></i></span>
      )
    }
    else return <span>测试按钮</span>
  }
})

export default Demo

/*
  此button是将状态管理放在了控件内部。
*/
import React, { PropTypes as T } from 'react'
// import './button.less'

const MyButton = React.createClass({
  propTypes: {
    children: T.node,
    onClick: T.func,
    className: T.string,
    loadingClassName: T.string
  },

  getInitialState () {
    return {
      isLoading: false
    }
  },

  render () {
    const { onClick, className, loadingClassName, ...others } = this.props

    return (
      <button onClick={this.handClick(onClick)} className={className} {...others}><span>{this.props.children}<i className={this.state.isLoading? loadingClassName:''}></i></span>
      </button>
    )
  },

  handClick (f) {
    return (e) => {
      if (!this.state.isLoading)
      {
        this.setState({ isLoading: true })
        setTimeout(() => {
          this.setState({ isLoading: false })
        }, 3000)

        f&&f(e)
      }
    }
  }
})

export default MyButton

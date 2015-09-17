import React, { PropTypes as T } from 'react'
import cNames from 'classnames'
import 'less/button.less'

const ShadowButton = React.createClass({
  propTypes: {
    children: T.node,
    className: T.string,
    state: T.number,
    onClick: T.func
  },
  getDefaultProps () {
    return {
      state: 1 // 0: loading, 1: normal, -1: disabled
    }
  },
  render () {
    const { className, onClick, ...others } = this.props
    return (
        <button {...others}
          className={
            cNames(
              className,
              { loading: this.props.state === 0 },
              { disabled: this.props.state === -1 }
            )
          }
          onClick={this._handleClick(onClick)}>{this.props.children}</button>
    )
  },
  _handleClick (f) {
    return (e) => {
      if (this.props.state > 0) {
        f && f(e)
      }
    }
  }
})

export default ShadowButton

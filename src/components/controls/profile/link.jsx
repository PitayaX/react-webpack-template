import React, { propTypes } from 'react'
import LinkImage from '../../images/weixin.png'

const AuthorLink =React.createClass({
  propTypes: {
    userId: React.PropTypes.string
  },
  render () {
    return (
        <div className="link-row">
          <img src={LinkImage} alt="weixin" />
        </div>
    )
  }
})
export default AuthorLink

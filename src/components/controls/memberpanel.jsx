import React, { PropTypes as T } from 'react'
import Panel from './panel'
import '../css&less/panel.less'

const MemberPanel = React.createClass({
  propTypes: {
    data: T.array.isRequired // 文章列表
  },
  render () {
    const posts = this.props.data.map(
      user => <div>
        <image src="user.avatar"></image>
        <a href={user.url}>user.nick</a>
        <span>{user.email}</span>
      </div> )
    return (<Panel title="成员">{posts}</Panel>)
  }
})

export default MemberPanel

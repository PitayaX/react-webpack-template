import React, { PropTypes as T } from 'react'
import Panel from './panel'
import '../css&less/panel.less'

const HotPanel = React.createClass({
  propTypes: {
    data: T.array.isRequired // 文章列表
  },
  render () {
    const { data, ...others } = this.props
    const posts = this.props.data.map( post => <div><a href={post.url}>{post.title}</a></div> )
    return (<Panel title="热文" {...others}>{posts}</Panel>)
  }
})

export default HotPanel

import React, { PropTypes as T } from 'react'
import Artical from './artical'
import cNames from 'classnames'

const Articals = React.createClass({
  propTypes: {
    data: T.array
  },
  handleFoot (item) {
    return <span>{item}</span>
  },
  render () {
    const footers = [ "阅读 2982 · 评论 65 · 喜欢 92 · 打赏 1", "阅读 2982 · 评论 65 · 喜欢 92 · 打赏 1" ]
    const articals = this.props.data && this.props.data.map(artical => {
      return (<Artical uri={artical.url} title={artical.title} imgSrc={artical.image}
      subject= {artical.subject} footers={footers} footHandler={this.handleFoot}/>)
    })

    return (
      <div>
        {articals}
      </div>
    )
  }
})

export default Articals

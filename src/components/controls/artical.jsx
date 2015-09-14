import React, { PropTypes as T } from 'react'
import cNames from 'classnames'
import '../css&less/articals.less'

const Artical = React.createClass({
  propTypes: {
    title: T.string, // 文章标题
    uri: T.string,
    imgSrc: T.string, // 图片地址
    abstract: T.string, // 文章内容摘要
    footers: T.array,
    footHandler: T.func
  },

  render () {
    const { title, uri, imgSrc, abstract, footers, footHandler, ...others } = this.props
    const foot = footers && footHandler && footers.map(item => footHandler(item))
    return (
      <div className="artical" {...others}>
        <div className="artical-left"><a href={uri} className="author" title={title}><image className="artical-photo photo" src={imgSrc} /></a></div>
        <div className="artical-right">
          <h3><a title="title" className="artical-title" href={uri}>{title}</a></h3>
          <a title="abstract" className="artical-abstract">{abstract}</a>
          <div className="artical-footer">{foot}</div>
       </div>
       <div className="clear"></div>
      </div>
    )
  }
})


export default Artical

import React from 'react'
import 'less/article.less'
const ArticleAuthorInfo=React.createClass({
  propTypes: {
    publishDate: React.PropTypes.string,
    author: React.PropTypes.string,
    words: React.PropTypes.number,
    follows: React.PropTypes.number,
    likes: React.PropTypes.number
  },
  render () {
    this.props.words = this.props.words || 0
    this.props.follows = this.props.follows || 0
    this.props.likes = this.props.likes || 0
    return(
      <div id='articleAuthor' className='articleAuthorInfo'>
        <img className="left" src="src/components/avatar.png" alt="Avatar" />
        <div calssName="left">
          <p>
            <span className='articleAuthorKey'>作者</span>
            &nbsp;&nbsp;&nbsp;
            <span className='articAuthorValue'>{this.props.author}</span>
            &nbsp;&nbsp;&nbsp;
            <span>{this.props.publishDate}*</span>
          </p>
          <p className='articAuthorNumber'>
            写了{this.props.words}字，被{this.props.follows}人关注，获得了{this.props.likes}个喜欢
          </p>
        </div>
      </div>
    )
  }
})
export default ArticleAuthorInfo

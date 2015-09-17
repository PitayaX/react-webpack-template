import React, { propTypes } from 'react'

const PostItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    brief: React.PropTypes.string
  },
  render () {
    return (
      <li className="post-item-row">
        <div className="post-item-avatar">
          <a className="avatar" href="/collection/bDHhpK">
            <img thumbnail="180x180" src="http://upload.jianshu.io/collections/images/47/rdn_4ddb18fddd2e9_%281%29.jpg?imageMogr/thumbnail/180x180" alt="Rdn 4ddb18fddd2e9 %281%29"/>
          </a>
        </div>
        <div className="post-item-body">
          <h5>
            <a href="/collection/bDHhpK">{this.props.title}</a>
          </h5>
            <p className="post-content">{this.props.brief}...</p>
            <p className="post-link">
              <a className="post-link-a" href="/collection/bDHhpK">13913篇文章</a>
             · 30.0K人关注
              <span className="post-tag">
                <i className="fa fa-tags"></i>&nbsp;
                  <a className="" href="/tags/1951/collections">连载</a>、
                  <a className="" href="/tags/17/collections">故事</a>
              </span>
            </p>
        </div>
      </li>
    )
  }
})
export default PostItem

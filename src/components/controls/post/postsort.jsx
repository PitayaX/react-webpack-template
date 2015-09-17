import React, { propTypes } from 'react'

const PostSort = React.createClass({
  render () {
    return (
      <div className="post-sort-container">
        <div className="post-sort-row">
          <ul>
            <li>
              <a href="#">
                <span>最新更新</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>热门排序</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>关注度排序</span>
              </a>
            </li>
          </ul>
       </div>
      </div>
    )
  }
})
export default PostSort

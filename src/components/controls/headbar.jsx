import React, { PropTypes as T } from 'react'
import '../css&less/headbar.less'


const HeadBar = React.createClass({
  render () {
    return ( <div className="header-bar">
              <div className="header-left"><span className="header-title">列表</span></div>
              <div className="header-right">
                <input type="text" placeholder="搜索" className="search-query"/>
                <span className="header-q-button"><i className="fa fa-sign-in"></i>登录</span>
                <span className="header-q-button"><i className="fa fa-user-plus"></i>注册</span>
              </div>
              <div style={{ clear: "both" }}></div>
            </div> )
  }
})

export default HeadBar

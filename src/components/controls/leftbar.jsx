import React, { PropTypes as T } from 'react'
import '../css&less/leftbar.less'


const LeftBar = React.createClass({
  render () {
    return (<div className="left-bar navbar">
              <ul>
                <li className="home"><a><i className="fa fa-home"></i></a></li>
                <li className="app"><a><i className="fa fa-user"></i></a></li>
                <li className="edit"><a><i className="fa fa-edit"></i></a></li>
              </ul>
            </div>)
  }
})

export default LeftBar

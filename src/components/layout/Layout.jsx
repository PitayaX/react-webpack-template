import React from 'react'
import LayoutLeft from './LayoutLeft'
import LayoutMiddle from './LayoutMiddle'
import LayoutRight from './LayoutRight'
import Navbar from '../nav/navbar'
import Backtop from '../utils/backtop'
import Profile from '../controls/profile/Profile'

import 'less/layout/layout.less'
import 'less/profile/avatar.less'
import 'less/profile/statistic.less'
import 'less/tag/tag.less'
import 'less/post/post.less'
import 'less/utils/loading.less'
import 'less/utils/backtop.less'

const Layout=React.createClass({

  render () {
    return (
      <div className="main" id="container">
        <div className="left" id="colleft">
          <LayoutLeft>
            <Navbar />
          </LayoutLeft>
        </div>
        <div className="middle" id="colmiddle">
         <LayoutMiddle>
           <Profile/>
         </LayoutMiddle>
        </div>
        <div className="right" id="colright">
         <LayoutRight />
        </div>
        <Backtop />
      </div>
    )
  }
})
export default Layout

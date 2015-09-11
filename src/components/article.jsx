import React from 'react'
import FontIcon from './controls/fontIcon.jsx'
import 'less/article.less'
import DuoShuo from './controls/duoShuo.jsx'

const ArticlePage=React.createClass({
  render () {
    return (
      <div className="clientHeight">
        {/* 第一列，第二列 fixed*/}
        <div className='fixed heightInherit'>
          {/* 第一列*/}
          <div className='col1 left heightInherit'>
            <FontIcon className='time2 menuIcon menuIconActive' fontClass='fa fa-home'/>
            <FontIcon className='time2 menuIcon' fontClass='fa fa-th'/>
            <FontIcon className='time2 menuIcon'fontClass='fa fa-pencil'/>
          </div>
          {/* 第二列*/}
          <div className='col2 left heightInherit'>
            <a href="#">
              <img src="src/components/teamLogo.png" alt="Team's Logo" calssName='width100' />
            </a>
          </div>
        </div>
        {/* 第三列*/}
        <div className='col3 clear heightInherit'>
          <div className='content'>
            <div id='articleTitle' className='articleTitle'>
            </div>
            <hr/>
            <div id='articleBody' className='articleBody'>
            </div>
            <br/>
            <br/>
            <DuoShuo id="comments" shortName='localtest998' thread='201508270001' title='2015年8月27日日记' url='http://localhost:8080' />
          </div>
          <hr className='bottomHr'/>
          <div id="bottom" className='bottom'>
              <p>
                Design & Supported by PitayaX Open Source Team
              </p>
              <p>
                Email:admin@pitayaX.net
              </p>
              <p>
                GitHub: github.com/organizations/PitayaX
              </p>
          </div>
        </div>
      </div>
    )
  }
})



export default ArticlePage

import React from 'react'
import FontIcon from './controls/fontIcon.jsx'
import 'less/article.less'
import DuoShuo from './controls/duoShuo.jsx'
import Bottom from './controls/bottom.jsx'
import ArticleAuthorInfo from './controls/articleAuthorInfo.jsx'
import Article from './controls/article.jsx'

const ArticlePage=React.createClass({
  render () {
    const tempModel={
      author: '清梨浅茶',
      publishDate: '2015.09.04 01:12',
      authorWords: 16875,
      authorFollows: 152,
      authorLikes: 718,
      articleWords: 1949,
      articleReaders: 1140,
      articleComments: 7,
      articleLikes: 36
    }
    return (
      <div className="height100">
        {/* 第一列，第二列 fixed*/}
        <div className='pageLeft'>
          {/* 第一列*/}
          <div className='col1'>
            <FontIcon className='menuIcon menuIconActive' fontClass='fa fa-home'/>
            <FontIcon className='menuIcon' fontClass='fa fa-th'/>
            <FontIcon className='menuIcon'fontClass='fa fa-pencil'/>
          </div>
          {/* 第二列*/}
          <div className='col2'>
            <a href="#">
              <img src="src/components/teamLogo.png" alt="Team's Logo" calssName='width100' />
            </a>
          </div>
        </div>
        {/* 第三列*/}
        <div className='col3'>
          <Article model={tempModel} />
          <hr className='bottomHr'/>
          <Bottom />
        </div>
      </div>
    )
  }
})



export default ArticlePage

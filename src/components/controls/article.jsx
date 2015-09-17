import React from 'react'
import ArticleTitle from './articleTitle.jsx'
import ArticleBody from './articleBody.jsx'
import ArticleAuthorInfo from './articleAuthorInfo.jsx'
import DuoShuo from './duoshuo.jsx'
import 'less/article.less'
const Article = React.createClass({
  propTypes: {
    model: React.PropTypes.shape({
      author: React.PropTypes.string,
      publishDate: React.PropTypes.string,
      authorWords: React.PropTypes.number,
      authorFollows: React.PropTypes.number,
      authorLikes: React.PropTypes.number,
      articleWords: React.PropTypes.number,
      articleReaders: React.PropTypes.number,
      articleComments: React.PropTypes.number,
      articleLikes: React.PropTypes.number
    }).isRequired
  },
  render () {
    return(
      <div className='content'>
        <ArticleAuthorInfo author={this.props.model.author} publishDate={this.props.model.publishDate} words={this.props.model.authorWords} follows={this.props.model.authorFollows} likes={this.props.model.authorLikes} />
        <hr/>
        <div id='article' className='article'>
          <ArticleTitle author={this.props.model.author} words={this.props.model.articleWords} readers={this.props.model.articleReaders} comments={this.props.model.articleComments} likes={this.props.model.articleLikes} />
          <ArticleBody text={window.MockData.articleData} />
        </div>
        <br/>
        <br/>
        <DuoShuo id="comments" shortName='localtest998' thread='201508270001' title='2015年8月27日日记' url='http://localhost:8080' />
      </div>

    )
  }
})

// test mock data
window.MockData={}
window.MockData.articleData=`张小凤和温柔是一个宿舍的舍友，而且还是临铺。按照常理来说，一个宿舍的临铺往往关系最好，但是她俩就是个意外。

张小凤不喜欢温柔。

即便温柔的性格非常好相处，但是张小凤就是不喜欢她。

因为她总是瞧不起温柔。

张小凤是他们村走出来的第二个大学生，第一个大学生是在十几年前走出他们那个大山沟的，那个时候的张小凤还只会躲在家门口玩泥巴。

张小凤的父亲走得早，是母亲把她一手拉扯大，其中的委屈，不言而喻。小凤的母亲在看过村里第一个大学生离村的热闹欢送会后，每天都会在小凤的耳边说上无数遍:

你一定要考上大学，给妈争脸。

尽管，当时的小凤才七岁。

后来，小凤终于考上了大学，虽然复习了一年，但总归没有辜负她母亲的期望。

经过一个漫长的暑假，小凤便扛着铺盖，背着包，还抱了一坛咸鸭蛋，坐了近25个小时的火车，来到学校。

报道完，小凤便去宿舍收拾东西。

宿舍一共四个人，看着床上的行李，已经来了两个。只剩下西边的两张床还空着，小凤随便挑了一个，就开始收拾行李。

小凤带的东西很少，不小会儿便收拾完毕。正当她长舒一口气的时候，宿舍门被轻轻地推开了。

小凤永远也不会忘记第一次见到温柔的情景。
当时的小凤才七岁。

后来，小凤终于考上了大学，虽然复习了一年，但总归没有辜负她母亲的期望。

经过一个漫长的暑假，小凤便扛着铺盖，背着包，还抱了一坛咸鸭蛋，坐了近25个小时的火车，来到学校。

报道完，小凤便去宿舍收拾东西。

宿舍一共四个人，看着床上的行李，已经来了两个。只剩下西边的两张床还空着，小凤随便挑了一个，就开始收拾行李。

小凤带的东西很少，不小会儿便收拾完毕。正当她长舒一口气的时候，宿舍门被轻轻地推开了。

小凤永远也不会忘记第一次见到温柔的情景。`


export default Article

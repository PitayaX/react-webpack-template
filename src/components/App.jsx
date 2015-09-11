import React, { PropTypes } from 'react'
import Articals from './controls/articals'
import Tags from './controls/tags'
import SortBar from './controls/sortbar'
import articalsData from './data/json.js'
import './site.less'

const Demo = React.createClass({
  getInitialState () {
    return {
      buttonState: 1
    }
  },
  render () {
    const articalsData = [ { title: "这个是标题哦", url: "http://www.baidu.com",
      image: "http://reactjs.cn/react/img/logo.svg", subject: "这是摘要哦。。。。。。。。。。。" },
      { title: "这个是标题哦", url: "http://www.baidu.com", image: "http://reactjs.cn/react/img/logo.svg",
        subject: "这是摘要哦。。。。。。。。。。。" }, { title: "这个是标题哦", url: "http://www.baidu.com",
        image: "http://reactjs.cn/react/img/logo.svg", subject: "这是摘要哦。。。。。。。。。。。" } ]
    const sortData = [ { name: "最近更新", id: 0, actived: true }, { name: "热门排名", id: 1, actived: false }, { name: "关注度排名", id: 2 } ]
    const tagData = [ { id: 0, name: "最热" }, { id: 1, name: "reactjs" } ]
    return (
      <div className='container'>
        <h2>Demo page</h2>
        <Tags data={tagData}/>
        <SortBar types={sortData} className="sortBar" onActiveChange={this.onActiveChanged}/>
        <Articals data={articalsData}/>
      </div>
    )
  },

  onActiveChanged (e, sortData) {
    // forceUpdate()
    // this.setState({ activedId: sortData.id })
  }
})

export default Demo

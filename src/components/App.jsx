import React, { PropTypes } from 'react'
import Redux from 'redux'
import Articals from './controls/articals'
import Tags from './controls/tags'
import SortBar from './controls/sortbar'
import Store from './common/store'
import { articalsData, sortData, tagData } from './data/json.js'
import './site.less'

const Demo = React.createClass({
  getInitialState () {
    return {
      buttonState: 1
    }
  },
  componentDidMount () {
    Store.getState()
    Store.subscribe(() =>
      console.log("redux="+Store.getState())
    )
  },
  render () {
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
    Store.dispatch({ type: 'INCREMENT' })
  }
})

export default Demo

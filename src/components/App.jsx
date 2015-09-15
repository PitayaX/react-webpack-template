import React, { PropTypes as T } from 'react'
import Redux from 'redux'
import { connect } from 'react-redux'
import Articals from './controls/articals'
import Tags from './controls/tags'
import SortBar from './controls/sortbar'
import HeadBar from './controls/headbar'
import LeftBar from './controls/leftbar'
// import Store from './common/store'
import { articalsData, sortData, tagData } from './data/json.js'
import { Actions, SetSort, SetFilter, SortType } from './action/actionArtical'
import './site.less'

const Demo = React.createClass({
  propTypes: {
    dispatch: T.func,
    tags: T.array,
    sorts: T.array,
    articals: T.array
  },
  getInitialState () {
    return {
      buttonState: 1
    }
  },
  componentDidMount () {    
    // something here
  },
  render () {
    const { dispatch, tags, sorts, articals } = this.props
    return (
      <div className='container'>
        <LeftBar />
        <div className="main">
          <div className="leftPanel"></div>
          <div className="content">
            <h2>Demo page</h2>
            <HeadBar />
            <Tags data={tags} onClick={
                tag => {
                  return dispatch(SetFilter(tag._id))
                }
              }/>
            <SortBar types={sortData} className="sortBar" onActiveChange={
                sort => dispatch(SetSort(sort.code))
              }/>
            <Articals data={articals}/>
          </div>
        </div>
      </div>
    )
  }
})

function ShowArtical (articals, sort) {
  switch (sort) {
  case SortType.SORT_FOLLOW:
    return articals.sort((a, b) => a._id - b._id)
    break
  case SortType.SORT_HOT:
    return articals.sort((a, b) => b.viewCount - a.viewCount)
  case SortType.SORT_NEW:
    return articals.sort((a, b) => b.publishedOn = a.publishedOn)
  default:
    return articals
  }
}

function select (state) {
  debugger
  return { articals: ShowArtical(state.FilterArtical, state.SortArtical), sorts: state.SortArtical, tags: tagData }
}

export default connect(select)(Demo)

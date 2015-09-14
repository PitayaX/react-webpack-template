import React, { PropTypes as T } from 'react'
import Redux from 'redux'
import { connect } from 'react-redux'
import Articals from './controls/articals'
import Tags from './controls/tags'
import SortBar from './controls/sortbar'
// import Store from './common/store'
import { articalsData, sortData, tagData } from './data/json.js'
import { Actions, SetSort, SetFilter } from './action/actionArtical'
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
    // Store.getState()
    // Store.subscribe(() =>
    //   console.log("redux="+Store.getState())
    // )
  },
  render () {
    const { dispatch, tags, sorts, articals } = this.props
    return (
      <div className='container'>
        <h2>Demo page</h2>
        <Tags data={tags} onClick={
            tag => {
              return dispatch(SetFilter(tag._id))
            }
          }/>
        <SortBar types={sorts} className="sortBar"/>
        <Articals data={articals}/>
      </div>
    )
  },

  onSortActiveChanged (e, sortData) {
    // forceUpdate()
    // this.setState({ activedId: sortData._id })
    // Store.dispatch({ type: 'INCREMENT' })
    // dispatch(SetSort())
  }
})

function select (state) {
  debugger
  return { articals: state.FilterArtical, sorts: sortData, tags: tagData }
}

export default connect(select)(Demo)

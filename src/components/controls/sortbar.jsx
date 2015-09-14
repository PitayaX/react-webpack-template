import React, { PropTypes as T } from 'react'
import CNames from 'classnames'
import '../css&less/sortbar.less'

const SortBar = React.createClass({
  propTypes: {
    types: T.array.isRequired,
    onActiveChange: T.func // example: onActiveChange(e, sortData)
  },

  getInitialState () {
    return {
      activedId: null
    }
  },

  render () {
    const  { types, ...others } = this.props
    const sorts = types.map( sort => <span
      className={
        CNames( "sort", { "actived": this.state.activedId === sort._id },
        { "unactived": this.state.activedId !== sort._id } )
      } /* value={sort.value} */
      onClick={this.clickEvent( sort )}>{sort.name}</span> )

    return (<div {...others}>{sorts}</div>)
  },

  clickEvent (  sortData ) {
    return (e) => {
      this.setState({ activedId: sortData._id })
      this.props.onActiveChange && this.props.onActiveChange(sortData, e)
    }
  }
})

export default SortBar

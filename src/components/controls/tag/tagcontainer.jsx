import React, { propTypes } from 'react'
import $ from 'jquery'
import Loading from '../../utils/loading'
import TagList from './taglist'

const TagContainer= React.createClass({
  propTypes: {
    apiUrl: React.PropTypes.string.isRequired,
    tags: React.PropTypes.array,
    isLoaded: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },
  getInitialState () {
        return {
          isLoaded: false,
          tags: [],
          apiUrl: "/src/data/tags.json"
        }
      },

  loadTagsFromServer () {
      $.ajax({
        url: this.props.apiUrl,
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          this.setState({ tags: data, isLoaded: true })
        }.bind(this)
      })
    },

  componentDidMount () {
      setTimeout( () => this.loadTagsFromServer(),
          6000
        )
    },
  handleClick (tagId) {
      this.props.onClick(tagId)
    },

  render () {
    let loading=null
    if (!this.state.isLoaded) {
      loading= <Loading className="spinner" />
    }
    else {
      loading=  <TagList data={this.state.tags} onClick={this.handleClick} />
    }
    return (
      <div className="tag-container">
        {loading}
      </div>
    )
  }
})
export default TagContainer

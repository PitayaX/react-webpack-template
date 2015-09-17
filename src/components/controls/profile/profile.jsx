import React, { propTypes } from 'react'
import Avatar from './avatar'
import AuthorName from './name'
import EditProfile from './editprofile'
import AuthorStatistic from './statistic'
import AuthorLink from './link'
import Picture from '../../images/yemol.png'

const Profile =React.createClass({
  render () {
    return (
      <div className="profile-container">
        <div className="profile-row-avatar">
          <Avatar imgUrl={Picture} authorName="yemol" />
        </div>
        <div className="profile-row-name">
          <AuthorName  authorName="yemol"/>
        </div>
        <div className="profile-row-edit">
          <EditProfile  userId="1" />
        </div>
        <div className="profile-row-link">
          <AuthorLink userId="1" />
        </div>
        <div className="profile-row-statistic">
          <AuthorStatistic userId="1" />
        </div>
      </div>
    )
  }
})
export default Profile

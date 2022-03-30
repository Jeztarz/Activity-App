import React from 'react'
import './Profile.css'
import Record from './DataProfile/RecordActivity'
import UserProfile from './DataProfile/UserProfile'

const Profile = () => {
  return (
    <div className="container record-box-main">
      
      {/* box left */}
      <UserProfile />

      {/* box right */}
      <Record />
    </div>
  )
}
export default Profile;
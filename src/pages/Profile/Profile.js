import './Profile.css'
import Record from '../../Components/DataProfile/RecordActivity'
import UserProfile from '../../Components/DataProfile/UserProfile'

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
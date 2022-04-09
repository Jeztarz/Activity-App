import UserProfile from '../../Components/DataProfile/UserProfile'
import EditProfile from '../../Components/EditProfile/EditProfile'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Profile(props) {
const [EditProfileForm, setEditProfileForm] = useState(false)
const [profileName, setProfileName] = useState('ActivityName')
const [aboutMe, setAboutMe] = useState('I`m hungry')
const [favorite, setFavorite] = useState('Running')

  const EditSetting = () => {
    setEditProfileForm(!EditProfileForm)
    
  }

  const editProfileName = (name) => {
    setProfileName(name)
  }

  const editAboutMe = (about) => {
    setAboutMe(about)
  }

  const editFavorite = (fav) => {
    setFavorite(fav)
  }
  


  return (
    <div className='profile'>
        <div>
            <img src='./Images/PROFILE.png' alt='profile-pic' className='pro-pic' />
        </div>
          { EditProfileForm ? 
            <EditProfile 
            editProfileName={editProfileName} 
            profileName={profileName}
            editAboutMe={editAboutMe}
            aboutMe={aboutMe}
            editFavorite={editFavorite}
            favorite={favorite}
            
            /> : 
            <UserProfile 
            profileName={profileName}
            aboutMe={aboutMe}
            favorite={favorite}
            /> }
        <button type="button" className="edit-profile" onClick={EditSetting}>
          { EditProfileForm ? 'Done' : 'Edit' }
        </button>
        <button type="button" className="edit-profile">
         <Link to='/login'>
         Logout
          </Link> 
        </button>
    </div>
  )
}

export default Profile;
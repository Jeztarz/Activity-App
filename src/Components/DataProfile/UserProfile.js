import { USER_NAME,ABOUT_ME } from '../userDataMogUp/userDataMogUp'


function UserProfile() {
    return (
        <div className='profile'>
    
        <div>
          <img src='./Images/PROFILE.png' alt='profile-pic' className='pro-pic' />
        </div>

        {/* data profile */}
        <div className='data-profile'>
        {USER_NAME}
        
          <div className='data-profile-user'>
            AboutMe
            <br/>
            {ABOUT_ME}
          </div>
          
          
          


        <button type="button" className="edit-profile" >
          edit
        </button>
        
        </div>


      </div>
    )
    
}

export default UserProfile;

function UserProfile() {
    return (
        <div className='profile'>
    
        <div>
          <img src='./Images/PROFILE.png' alt='profile-pic' className='pro-pic' />
        </div>

        {/* data profile */}
        <div className='data-profile'>
        Name
        
          <div className='data-profile-user'>
            AboutMe
            <br/>
            I'm hungry
          </div>
          
          <div className='data-profile-user'>
            Email
            <br/>
            activity@gmail.com
          </div>
          
          <div className='data-profile-user'>
            Achievement
            
          </div>


        <button type="button" className="edit-profile" >
          edit
        </button>
        
        </div>


      </div>
    )
    
}

export default UserProfile;
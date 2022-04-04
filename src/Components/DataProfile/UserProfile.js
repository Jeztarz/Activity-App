
function UserProfile({ profileName, aboutMe, favorite }) {
  return (
    <div className="data-profile">
      {profileName}
      <div className="data-profile-user">
        AboutMe
        <br />
        {aboutMe}
      </div>

      <div className="data-profile-user">
        Favorite
        <br />
        {favorite}
      </div>
    </div>
  );
}

export default UserProfile;

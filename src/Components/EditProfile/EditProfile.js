import "./EditProfile.css";

function EditProfile({ 
  profileName, 
  editProfileName, 
  aboutMe, 
  editAboutMe, 
  favorite, 
  editFavorite,
}) {

  return (
    <div className="data-profile-edit">
      <input
        type="text"
        name="username"
        placeholder="enter you name"
        id="addName"
        className="editProfileUserName"
        value={profileName}
        onChange={(e) => editProfileName(e.target.value)}
      />

      <div className="data-profile-user">
        <textarea
          type="text"
          name="aboutMe"
          placeholder="Write some about you..."
          id="aboutMe"
          className="editProfile"
          value={aboutMe}
          onChange={(e) => editAboutMe(e.target.value)}
        />
      </div>

      <div className="data-profile-user">
        <textarea
          type="text"
          name="favorite"
          placeholder="Write something about your favorite"
          id="addFavorite"
          className="editProfile"
          value={favorite}
          onChange={(e) => editFavorite(e.target.value)}
        />
      </div>

      <input
        type="text"
        name="duration"
        placeholder="enter you duration goal"
        id="addDuration"
        className="editProfileUserName"
      />

      <input
        type="text"
        name="cals"
        placeholder="enter you calories goal"
        id="addCals"
        className="editProfileUserName"
      />

    </div>
  );
}

export default EditProfile;

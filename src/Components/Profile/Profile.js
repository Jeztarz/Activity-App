import "./Profile.css";
import { useState } from "react";
import axios from "axios";
import LogoutButton from "../../pages/Login/LogoutButton";

function Profile(props) {
  const [toggleEdit, setToggleEdit] = useState(false);

  
  const initProfileDataForm = () => {
    props.setProfileData({
      displayName: props.data.displayName,
      aboutMe: props.data.aboutMe,
      favorite: props.data.favorite,
      minGoal: props.data.durationGoal,
      calGoal: props.data.caloriesGoal,
    });
    setToggleEdit(!toggleEdit);
  };

  const editProfileData = () => {
    axios({
      method: "PUT",
      data: {
        favorite: props.profileData.favorite,
        aboutMe: props.profileData.aboutMe,
        displayName: props.profileData.displayName,
        durationGoal: props.profileData.minGoal,
        caloriesGoal: props.profileData.calGoal,
      },
      withCredentials: true,
      url: "https://final-project-backend-two.vercel.app/users/edit",
    }).then((res) => {
      setToggleEdit(false);
      props.getProfileAPI();
    });
  };

  return (
    <div className="profile">
      <div>
        <img src="./Images/PROFILE.png" alt="profile-pic" className="pro-pic" />
      </div>

      <div className="data-profile">
        {/*DisplayName */}
        {toggleEdit ? (
          <input
            className="editUserDisplayName"
            type="text"
            placeholder="change display name"
            name="displayName"
            value={props.profileData.displayName}
            onChange={props.handleProfileChange}
          />
        ) : props.data ? (
          <p>{props.data.displayName}</p>
        ) : (
          <></>
        )}

        {/* about me */}
        <div className="data-profile-user">
          <p>AboutMe</p>
          {toggleEdit ? (
            <input
              className="editUser"
              type="text"
              placeholder="Entre your about me"
              name="aboutMe"
              value={props.profileData.aboutMe}
              onChange={props.handleProfileChange}
            />
          ) : props.data ? (
            <span>{props.data.aboutMe}</span>
          ) : (
            <></>
          )}
        </div>

        {/* favorite */}
        <div className="data-profile-user">
          <p>Favorite</p>
          {toggleEdit ? (
            <input
              className="editUser"
              type="text"
              placeholder="Enter your favorite"
              name="favorite"
              value={props.profileData.favorite}
              onChange={props.handleProfileChange}
            />
          ) : props.data ? (
            <span>{props.data.favorite}</span>
          ) : null}
        </div>

        {/* min goal */}
        {toggleEdit && (
          <div className="data-profile-user">
            <p>Duration Goal</p>
            <input
              className="editUser"
              type="text"
              placeholder="Enter your duration goal"
              name="minGoal"
              value={props.profileData.minGoal}
              onChange={props.handleProfileChange}
            />
          </div>
        )}

        {toggleEdit && (
          <div className="data-profile-user">
            <p>Calories Goal</p>
            <input
              className="editUser"
              type="text"
              placeholder="Enter your calories goal"
              name="calGoal"
              value={props.profileData.calGoal}
              onChange={props.handleProfileChange}
            />
          </div>
        )}
      </div>

      {/* switch edit <=>  */}
      {!toggleEdit ? (
        <button
          type="button"
          className="edit-profile"
          onClick={initProfileDataForm}>
          Edit
        </button>
      ) : (
        <button
          type="button"
          className="edit-profile"
          onClick={editProfileData}>
          Submit
        </button>
      )}

      {/* log out */}
      <LogoutButton />
    </div>
  );
}

export default Profile;

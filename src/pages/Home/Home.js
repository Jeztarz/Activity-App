import "./Home.css";

import Profile from "../../Components/Profile/Profile";
import ActivityRecord from "../../Components/Record/ActivityRecord";
import Goal from "../../Components/Goal/Goal";
import Activity from "../../Components/Record/Activity/Activity";

import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);
  const [goal, setGoal] = useState();
  const [calGoal, setCalGoal] = useState();

  const [profileData, setProfileData] = useState({
    displayName: "",
    aboutMe: "",
    favorite: "",
    minGoal: 0,
    calGoal: 0,
  });

  const getProfileAPI = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/users/me",
    }).then((res) => {
      setData(res.data);
      setGoal(res.data.durationGoal);
      setCalGoal(res.data.caloriesGoal);
      // console.log(res.data.durationGoal)
    });
  };

  useEffect(() => {
    let isMounted = true;
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/users/me",
    }).then((res) => {
      if (isMounted) setData(res.data);
    });
    return () => {
      isMounted = false;
    };
  }, [data]);

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const [getFormRecords, setGetFormRecords] = useState([]);
  const [updateRecord, setUpdateRecord] = useState(false);
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/users/me/records",
    }).then((res) => {
      setGetFormRecords(res.data);
      setUpdateRecord(!updateRecord);
    });
  }, [updateRecord]);

  return (
    <div className="glass">
      <div className="dashboard">
        <Profile
          profileData={profileData}
          handleProfileChange={handleProfileChange}
          setProfileData={setProfileData}
          data={data}
          getProfileAPI={getProfileAPI}
        />
        
      </div>


      <div className="mainBox">
        
      <Goal goal={goal} calGoal={calGoal} getFormRecords={getFormRecords}/>
      <Activity setUpdateRecord={setUpdateRecord} />
      <ActivityRecord getFormRecords={getFormRecords} />
      </div>
      


    </div>
  );
};
export default Home;

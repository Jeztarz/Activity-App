import './Home.css'

import Profile from '../../Components/Profile/Profile';
import ActivityRecord from '../../Components/Record/ActivityRecord';
import Goal from '../../Components/Goal/Goal'
import Activity from '../../Components/Record/Activity/Activity';

import { useState, useEffect } from 'react'
import axios from 'axios';

const Home = () => {

  const [data, setData] = useState(null);
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
        });
  };

  useEffect( () => {
    let isMounted = true;
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/users/me",
      }).then((res) => {
        if(isMounted) setData(res.data);      
      });
      return () => { isMounted = false}
  },[data]);

  const handleProfileChange = e => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    })
  }



  return (
    <div className="record-box-main">
      <section>
      <div className='color'></div>
      <div className='color'></div> 
      <div className='color'></div>
      </section>
      <div className='userAndAddTop'>

        <Profile  profileData={profileData} handleProfileChange={handleProfileChange} setProfileData={setProfileData} data={data} getProfileAPI={getProfileAPI}/>

        <Activity />
        
      </div>
      
        <Goal />
        <ActivityRecord />
      


    </div>
  )
}
export default Home;
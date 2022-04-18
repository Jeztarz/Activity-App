import { useState, useEffect } from "react";
import axios from "axios";
import './ActivityRecord.css'

function ActivityRecord() {
  const [getFormRecords, setGetFormRecords] = useState([]);
  
  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/users/me/records",
    }).then((res) => {
      setGetFormRecords(res.data);
      console.log(res.data);
      
    });

  },[])

  
  return (
    <div className="BoxDown">
      <div className="data-activity">
        <div className="data-activity-user fontW">DATE</div>&nbsp;|&nbsp;
        <div className="data-activity-user fontW">ACTIVITY</div>&nbsp;|&nbsp;
        <div className="data-activity-user fontW">TIMES</div>&nbsp;|&nbsp;
        <div className="data-activity-user fontW">CALORIES</div>&nbsp;&nbsp;
      </div>

      {getFormRecords.map((activity) => {
        return (
          <div className="data-activity" key={activity._id}>
            <div className="data-activity-user">
              {activity.timestamp}
            </div>
            &nbsp;|&nbsp;
            <div className="data-activity-user">
              {activity.activityName}
            </div>
            &nbsp;|&nbsp;
            <div className="data-activity-user">
              {activity.duration} min
            </div>
            &nbsp;|&nbsp;
            <div className="data-activity-user">
              {activity.calories}
            </div>
            &nbsp;&nbsp;
          </div>
        );
      })}
    </div>
  );
}

export default ActivityRecord;

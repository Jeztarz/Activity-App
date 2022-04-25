import "./ActivityRecord.css";
import axios from "axios";

function ActivityRecord(props) {
  
  const deletePost = (id) => {
    axios({
      method: "DELETE",
      withCredentials: true,
      url: `http://localhost:4000/users/me/records/${id}`,
    }).then((res) => {console.log(res)});
  }
  

  return (
    <div className="BoxDown">
      <div className="data-activity">
        <div className="data-activity-user fontW">DATE</div>&nbsp;|&nbsp;
        <div className="data-activity-user fontW">ACTIVITY</div>&nbsp;|&nbsp;
        <div className="data-activity-user fontW">TIMES</div>&nbsp;|&nbsp;
        <div className="data-activity-user fontW">CALORIES</div>&nbsp;|&nbsp;
        <div className="data-activity-user fontW"><img
                  src="../../Images/delete.png"
                  alt="readMore"
                  className="readMore"
                /></div>
      </div>

      {props.getFormRecords.map((activity) => {
        return (
          <div className="data-activity" key={activity._id}>
            <div className="data-activity-user">
              {activity.timestamp && activity.timestamp.slice(0, 10)}
            </div>
            &nbsp;|&nbsp;
            <div className="data-activity-user">{activity.activityName}</div>
            &nbsp;|&nbsp;
            <div className="data-activity-user">{activity.duration} min</div>
            &nbsp;|&nbsp;
            <div className="data-activity-user">{activity.calories}</div>
            &nbsp;|&nbsp;
            <div className="data-activity-user">
              <button className="openModal" 
              onClick={() => {deletePost(activity._id);}} 
              >
              <img
                  src="../../Images/delete.png"
                  alt="readMore"
                  className="readMore"
                />
              </button>
                
               
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ActivityRecord

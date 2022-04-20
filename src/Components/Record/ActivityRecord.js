
import './ActivityRecord.css'

function ActivityRecord(props) {
  
  return (
    <div className="BoxDown">
      <div className="data-activity">
        <div className="data-activity-user fontW">DATE</div>&nbsp;|&nbsp;
        <div className="data-activity-user fontW">ACTIVITY</div>&nbsp;|&nbsp;
        <div className="data-activity-user fontW">TIMES</div>&nbsp;|&nbsp;
        <div className="data-activity-user fontW">CALORIES</div>&nbsp;&nbsp;
      </div>

      {props.getFormRecords.map((activity) => {
        return (
          <div className="data-activity" key={activity._id}>
            <div className="data-activity-user">
              {activity.timestamp && activity.timestamp.slice(0, 10)}
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


function RecordActivity() {
  const activityRecord = [{
            __id: 'record-1',
            activityName: 'Running',
            timestamp: '13 / 6 / 2556',
            duration: 40,
            calories: 200,
            description: '',
        },
        ];

  return (
      <div className='BoxDown'>
        

      
      <div className='data-activity'>
        <div className='data-activity-user'>
          DATE
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          ACTIVITY
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          TIMES
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          CALORIES
        </div>&nbsp;&nbsp;
      </div>

      
    { activityRecord.map((activity) => {
      return (
      <div className='data-activity'>
        <div className='data-activity-user'>
          {activity.timestamp}
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          {activity.activityName}
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          {activity.duration} min
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          {activity.calories}
        </div>&nbsp;&nbsp;
      </div>
  )})}
      
    </div>

  )
}

export default RecordActivity;
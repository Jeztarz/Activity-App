import NewRecord from "./NewRecord";

function RecordActivity() {
  

  return (
      <div className='BoxDown'>
        <div className='top-plus'>
          <div className='data-result'>
            DISTANCE GOAL
            <br/>
            0 min
          </div>
          <div className='data-result'>
            CURRENT TOTAL
            <br/>
            0 min
          </div>
          <div className='data-result'>
            CALORIES GOAL
            <br/>
            0 cals
          </div>
          <div className='data-result'>
            CURRENT TOTAL
            <br/>
            0 cals
          </div>



        {/* button + */}
      
      </div>

      {/* =========row for data */}
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

      
      <NewRecord />
      <NewRecord />
      <NewRecord />
      <NewRecord />
      <NewRecord />
      <NewRecord />
      <NewRecord />
      <NewRecord />
      <NewRecord />
      
    </div>

  )
}

export default RecordActivity;
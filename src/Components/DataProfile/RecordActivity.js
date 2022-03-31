
function RecordActivity() {
  
  return (
      <div className='BoxDown'>
        <div className='top-plus'>
          <div className='data-result goal'>
            GOAL
            <br/>
            5000 min
          </div>
          <div className='data-result goal'>
            CURRENT TOTAL
            <br/>
            50 min
          </div>
          <div className='data-result goal'>
            CALORIES GOAL
            <br/>
            8000 min
          </div>
          <div className='data-result goal'>
            CURRENT TOTAL
            <br/>
            324 cals
          </div>



        {/* button + */}
      
      </div>

      {/* =========row for data */}
      <div className='data-activity goal'>
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


      <div className='data-activity goal'>
        <div className='data-activity-user'>
          13 / 06 /2022
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          RUN
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          50 min
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          324
        </div>&nbsp;&nbsp;
      </div>

      
    </div>

  )
}

export default RecordActivity;
import React from 'react'


const Record = () => {
  return (
  
      <div className='box-right'>
        <div className='top-plus'>
          <div className='data-result'>
            GOAL
            <br/>
            5000 min
          </div>
          <div className='data-result'>
            CURRENT TOTAL
            <br/>
            50 min
          </div>



        {/* button + */}
        <div>
          <button type="button" className='button-plus'>
            +
          </button>
        </div>
      
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


      <div className='data-activity'>
        <div className='data-activity-user'>
          13 / 06 /2022
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          RUN
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          30 min
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          324
        </div>&nbsp;&nbsp;
      </div>

      <div className='data-activity'>
        <div className='data-activity-user'>
          15 / 06 /2022
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          WALK
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          50 min
        </div>&nbsp;|&nbsp;
        <div className='data-activity-user'>
          334
        </div>&nbsp;&nbsp;
      </div>
    </div>

  )
}

export default Record;
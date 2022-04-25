import "./Goal.css";

function Goal(props) {
  const currentMin = props.getFormRecords.reduce((totalMin, record) => {
    return totalMin + record.duration;
  }, 0);

  const currentCals = props.getFormRecords.reduce((totalCal, record) => {
    return totalCal + record.calories;
  }, 0);

  return (
    <div className="boxGoal">
      {/* duration goal */}
      <div className="resultGoal">
        DURATION GOAL
        <br />
        {props.goal} min
      </div>

      <div className="resultGoal">
        DURATION TOTAL
        <br />
        {currentMin} min
      </div>

      {/* cal goal */}
      <div className="resultGoal">
        CALORIES GOAL
        <br />
        {props.calGoal} cals
      </div>

      <div className="resultGoal">
        CALORIES TOTAL
        <br />
        {currentCals} cals
      </div>
    </div>
  );
}

export default Goal;

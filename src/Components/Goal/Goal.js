function Goal(props) {

  const currentMin = props.getFormRecords.reduce( (totalMin, record) => {
    return totalMin + record.duration
  },0);

  const currentCals = props.getFormRecords.reduce( (totalCal, record) => {
    return totalCal + record.calories
  },0);

  return (
    <div className="BoxDownGoal">
      <div className="top-plus">
        {/* duration goal */}
        <div className="data-result-goal">
          DURATION GOAL
          <br />
          {props.goal} min
        </div>

        <div className="data-result-goal">
          CURRENT TOTAL
          <br />
          {currentMin} min
        </div>

        {/* cal goal */}
        <div className="data-result-goal">
          CALORIES GOAL
          <br />
          {props.calGoal} cals
        </div>

        <div className="data-result-goal">
          CURRENT TOTAL
          <br />
          {currentCals} cals
        </div>
      </div>
    </div>
  );
}

export default Goal;

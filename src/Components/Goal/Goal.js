import CaloriesGoal from "./CaloriesGoal";
import DurationGoal from "./DurationGoal";

function Goal() {
  return (
    <div className="BoxDownGoal">
      <div className="top-plus">
        <DurationGoal />
        <CaloriesGoal />
      </div>
    </div>
  );
}

export default Goal;

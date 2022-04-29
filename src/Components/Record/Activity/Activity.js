import { useState, useEffect } from "react";
import "./Activity.css";
import Timer from "../Timer/Timer";
import Form from "../Form/Form";

function Activity(props) {
  const ACITIVITIES_TYPE = [
    { label: "Running", actSrc: "../../Images/Activity-Pictures/running.png" },
    { label: "Badminton", actSrc: "../../Images/Activity-Pictures/badminton.png" },
    { label: "Bike", actSrc: "../../Images/Activity-Pictures/bike.png" },
    { label: "Jumping", actSrc: "../../Images/Activity-Pictures/jump.png" },
    { label: "Swimming", actSrc: "../../Images/Activity-Pictures/swimming.png" },
    { label: "Walking", actSrc: "../../Images/Activity-Pictures/walk.png" },
    { label: "Weight", actSrc: "../../Images/Activity-Pictures/weight.png" },
  ];

  const [slideAct, setSlideAct] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [form, setForm] = useState({
    actTypes: "",
    date: "",
    hr: 0,
    mn: 0,
    cal: 0,
    des: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const next = () => {
    if (slideAct === ACITIVITIES_TYPE.length - 1) {
      setSlideAct(0);
      setForm({
        ...form,
        actTypes: ACITIVITIES_TYPE[0].label,
      });
    } else {
      const nextSide = slideAct + 1;
      setSlideAct(nextSide);
      setForm({
        ...form,
        actTypes: ACITIVITIES_TYPE[nextSide].label,
      });
    }
  };

  const previous = () => {
    if (slideAct === 0) {
      setSlideAct(ACITIVITIES_TYPE.length - 1);
      setForm({
        ...form,
        actTypes: ACITIVITIES_TYPE[ACITIVITIES_TYPE.length - 1].label,
      });
    } else {
      const nextSide = slideAct - 1;
      setSlideAct(nextSide);
      setForm({
        ...form,
        actTypes: ACITIVITIES_TYPE[nextSide].label,
      });
    }
  };

  // const next = () => {
  //   if (slideAct === ACITIVITIES_TYPE.length - 1) {
  //     setSlideAct(0);
  //   } else {
  //     const nextSide = slideAct + 1;
  //     setSlideAct(nextSide);
  //   }
  // };

  // const previous = () => {
  //   if (slideAct === 0) {
  //     setSlideAct(ACITIVITIES_TYPE.length - 1);
  //   } else {
  //     const nextSide = slideAct - 1;
  //     setSlideAct(nextSide);
  //   }
  // };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="box-right">
      <div className="mainActivityPage">
        <div className="duration">
          <Timer
            seconds={seconds}
            setIsActive={setIsActive}
            isActive={isActive}
            setSeconds={setSeconds}
          />
          <div>
            <section className="slider">
              <img
                src="./Images/arrow-left-color.png"
                className="s-select left-arrow"
                onClick={previous}
                alt="left"
              />
              <img
                src={
                  ACITIVITIES_TYPE[slideAct] &&
                  ACITIVITIES_TYPE[slideAct].actSrc
                }
                alt="no internet"
                className="image"
              />
              <img
                src="./Images/arrow-right-color.png"
                className="s-select right-arrow"
                onClick={next}
                alt="right"
              />
            </section>
          </div>
        </div>

        <div className="activityForm">
          <form>
            <Form
              form={form}
              setForm={setForm}
              handleChange={handleChange}
              setActivityForm={props.setActivityForm}
              setUpdateRecord={props.setUpdateRecord}
              setSlideAct={setSlideAct}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Activity;

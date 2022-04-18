import { useState, useEffect} from 'react';
import './Activity.css'
import Timer from '../Timer/Timer'
import Form from '../Form/Form';


function Activity(props) {
  const ACITIVITIES_TYPE = [
    {label: 'Running', actSrc: '../../Images/Activity-Pictures/running.png' },
    {label: 'Badminton', actSrc: '../../Images/Activity-Pictures/badminton.png' },
    {label: 'Bike', actSrc: '../../Images/Activity-Pictures/bike.png' },
    {label: 'Jumping', actSrc: '../../Images/Activity-Pictures/jump.png' },
    {label: 'Swimming', actSrc: '../../Images/Activity-Pictures/swimming.png' },
    {label: 'Walking', actSrc: '../../Images/Activity-Pictures/walk.png' },
    {label: 'Weight', actSrc: '../../Images/Activity-Pictures/Weight.png' },
    
  ]

  const [slideAct, setSlideAct] =useState (0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [form, setForm] = useState({
    actTypes: '',
    date: '',
    hr: 0,
    mn: 0,
    cal: 0,
    des: ""
  })

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
    console.log(form)
  }

  const next = () => {
    if (slideAct === (ACITIVITIES_TYPE.length-1)) {
      setSlideAct(0)
    } else {
      const nextSide = slideAct + 1
      setSlideAct(nextSide)
    }
  }

  const previous = () => {
    if (slideAct === 0) {
      setSlideAct(ACITIVITIES_TYPE.length-1)
    } else {
      const nextSide = slideAct - 1
      setSlideAct(nextSide)
    }
  }

useEffect(() => {
  let interval = null;
  if (isActive) {
    interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
  } else if (!isActive && seconds !== 0) {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
}, [isActive, seconds]);

const Finsih = () => {
  const hrTimer = Math.floor(seconds/3600);
  const mnTimer = (Math.floor( seconds/60 )) % 60;
  const todayDate = new Date()
  const convertdate = (date) => {
    const arrayDate = todayDate.toLocaleDateString().split('/')
    const sufferDate = [arrayDate[2], 
                        (arrayDate[0] < 10 ? '0' : '') + arrayDate[0], 
                        (arrayDate[1] < 10 ? '0' : '') + arrayDate[1],]
    return sufferDate.join('-')
  }
  const newDate = convertdate(todayDate)
  console.log(newDate)
  setForm({
    ...form,
    hr: hrTimer,
    mn: mnTimer,
    actTypes: ACITIVITIES_TYPE[slideAct].label,
    date: newDate
  });
  setSeconds(0)
  setIsActive(false)
}


  return (
    <div className='box-right'>
      <div className="mainActivityPage">
          <div className='duration'>
            <Timer seconds={seconds} setIsActive={setIsActive} isActive={isActive} setSeconds={setSeconds}/>  
              <div className='divTree'>
              <section className='slider'>
                <img src='./Images/arrow-left-color.png' className='s-select left-arrow' onClick={previous} alt='left' />
                <img src={ACITIVITIES_TYPE[slideAct].actSrc} alt='no internet' className='image'/>
                <img src='./Images/arrow-right-color.png' className='s-select right-arrow' onClick={next} alt='right' />
              </section>
                <div className='button-record'>
                  <button className='button' onClick={Finsih}>
                  record to your activity
                  </button>
                </div>
              </div>
          </div>
            
          <div className='activityForm'>
            <h2>Your Activity </h2> 
            <form>
              <Form form={form} setForm={setForm} handleChange={handleChange} setActivityForm={props.setActivityForm} />
            </form>
          </div>
            
      </div>
    </div>
  )
}
export default Activity;
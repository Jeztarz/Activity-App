import { useState, useEffect} from 'react';
import './Activity.css'
import Timer from '../../Components/Timer/Timer'
import Form from '../../Components/Form/Form'
import ActivitySelect from '../../Components/ImagesData/ActivitySelect';

function Activity() {
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
      actTypes: 'Running',
      date: newDate
    });
    setSeconds(0)
    setIsActive(false)
  }

  return (
    <div className="container mainActivityPage">
        <div className='timerActivity'>
            <div className='duration'>
                <Timer seconds={seconds} setIsActive={setIsActive} isActive={isActive} setSeconds={setSeconds}/>
                
                <div className='divTree'>
                    <div>
                        <ActivitySelect />
                    </div>

                    <div className='button-record'>
                    <button className='button' onClick={Finsih}>
                        RECORD
                    </button>
                    </div>
                </div>
                
            </div>
            <div className='addAc'>
                <div>
                    <h2>Your Activity</h2>
                    <form className='addActivity'>
                        <Form form={form} setForm={setForm} handleChange={handleChange} />
                    </form>
                </div>
            </div>
        
      </div>
    </div>
  )
}
export default Activity;
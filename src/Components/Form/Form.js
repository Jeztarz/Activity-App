import React from 'react'
import axios from 'axios';
import './Form.css'

function Form(props) {
  
    const records = () => {
        
        axios({
          method: "POST",
          data: {
            activityName: props.form.actTypes,
            timestamp: props.form.date,
            duration: props.form.mn,
            calories: props.form.cal,
            description: props.form.des,
          },
          withCredentials: true,
          url: "http://localhost:4000/users/me/records",
        }).then((res) => console.log(res));
      };
    
  return (
    <div className='typeInput'>
        <div className='form-actType'>
            <label>Activity&nbsp;&nbsp;</label> 
            <input type="text" value={props.form.actTypes} name="actTypes" onChange={props.handleChange} required />
        </div>
        <div className='form-date'>
            <label>Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
            <input type="date" value={props.form.date} name="date" onChange={props.handleChange}  required/> 
        </div>
        <br/>
        <div>
            <label id='duration'>Duration</label> <br/>
            <input type="number" value={props.form.hr} name="hr" onChange={props.handleChange} min={0} max={24} required></input>
            <label>&nbsp;Hour&nbsp;&nbsp;&nbsp;&nbsp;</label> 
            <input type="number" value={props.form.mn} name="mn" onChange={props.handleChange} min={0} max={59} required></input>
            <label>&nbsp;Minute</label>  
        </div>
        <div>
            <label>Calorie&nbsp;&nbsp;</label>
            <input type="number" value={props.form.cal} name="cal" onChange={props.handleChange} min={0} max={9999}/>
            <label>&nbsp;&nbsp;cals</label>
        </div>
        <div>
            <label >Description: </label> <br/>
            <textarea name="des" cols="20" rows="3" value={props.form.des} onChange={props.handleChange}></textarea>
        </div>
        <button type="submit" className="button" onClick={records}>
          save
        </button>
    </div>
  )
}

export default Form

import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const [formData, setformData] = useState({
    first_name: '',
    last_name: '',
    model: '',
    car_price:'',
    card_info:'',
    expiry_date:'',
  })
  const [step, setstep] = useState(1);
  console.log(step)

  const nextStep = ()=>{
      setstep((prev)=>prev+1)
  }
  const prevStep = ()=>{
      setstep((prev)=>prev-1)
  }

  const handleChange = (e)=>{
     setformData({...formData , [e.target.id]:e.target.value})
  }

  const submitForm = ()=>{
     console.log(formData)
  }


  return (
    <div>
        <Step formData= {formData} nextStep= {nextStep} prevStep={prevStep} handleChange={handleChange} step={step} submitForm={submitForm} />
    </div>
  )
}

export default App

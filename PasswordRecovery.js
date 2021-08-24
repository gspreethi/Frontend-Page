import React from 'react';
import {useHistory} from 'react-router-dom';
import {useState} from 'react'

export default function PasswordRecovery(props) {
  let setTrigger=props.setTrigger;

  let history=useHistory();
  const [data,setData]=useState({
    "SecurityAns1":"",
    "SecurityAns2":"",
    "SecurityAns3":"",
  });
 
  const handleSubmit = (e) => {
   e.preventDefault();
    console.log(data);
    //postUserInfo(data);
      
    fetch('http://localhost:8080/insertSecretQues',{
              method:'POST',
              body:JSON.stringify(data),
              headers:{'Content-Type':'application/json'},
         })
          .then(res=>res.json())
          .then(json=>setData(json.data))

          alert("Answers submitted successfully");
          history.push('Registration');
  };
  

  return (props.trigger)?(
    <div className="popupsec">
      <div className="popupsec-inner">
        <form onSubmit={handleSubmit}
      style={{border:'1px solid blue',"padding":3,"width":500,"paddingLeft":30,fontFamily:'sans-serif',color:'GrayText',alignItems:"center"}} >

      
              <div className="form-group">
        <label htmlFor="question1" className="form-label">Question 1</label>
                  <p id="question1">What is your first School Name?</p>
              </div> 


      <div className="form-group">
              <input type="text" className="form-control"  id="answer1" 
        aria-describedby="answer1" name="answer1" 
        onChange={(e)=>{setData({...data,securityAns1:e.target.value})}} required />
            </div>
      
      <div className="form-group">
        <label htmlFor="question2" className="form-label">Question 2</label>
                <p id="question2">What is your favourite pet animal?</p>
         </div> 

      <div className="mb-3">
           <input type="text" className="form-control"  id="answer2" 
        aria-describedby="answer2" name="answer2" 
        onChange={(e)=>{setData({...data,securityAns2:e.target.value})}} required />
            </div>

            <div className="form-group">
        <label htmlFor="question3" className="form-label">Question 3</label>
            <p id="question3">What is your favourite Holiday destination?</p>
      </div> 
        
      <div className="form-group">
           <input type="text" className="form-control"  id="answer3" 
        aria-describedby="answer3" name="answer3" 
        onChange={(e)=>{setData({...data,securityAns3:e.target.value})}} required />
      </div>

      <button className="btn btn-danger" onClick={()=>setTrigger(false)} style={{textAlign:"right"}}> Back</button>
      <button type="submit" className="btn btn-primary">Submit </button>

           </form>
      </div>
</div>
):'';
}

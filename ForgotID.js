import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

export default function ForgotId() {
    let history=useHistory();
    const[responses,setResponses]=useState({})
    const [data,setData]=useState({
        "contact":"",
        "securityAns1":"",
        "securityAns2":"",
        "securityAns3":""
    })

    const handleValidation=(e)=>{

        e.preventDefault();
        console.log("from form:",data);

        fetch(`http://localhost:8080/getQuestionsByContact/${data.contact}`)
        .then((response) => response.json())
        .then((res) =>{ 
          
          console.log("From db:",res);
          setResponses(res);

          if(((data.securityAns1 === res.securityAns1) && (data.securityAns2 === res.securityAns2) &&
           (data.securityAns3 === res.securityAns3)) && (data.contact === res.contact) )
         {
              alert(`Your USER ID is : ${res.userId}`)
                return(
                history.push('UserLogin')
                )
         }
         else{
             alert("Answers are not matched")
         }
         });
}

    return (
        <div>
      <div className="container pt-5">
    <div className="row justify-content-sm-center pt-5">
      <div className="col-sm-6 shadow round pb-3">
        <h1 className="text-center pt-3 text-primary">Forgot your Id</h1>
        <form  onSubmit={handleValidation}>

        <div className="form-group">
            <label className="col-form-label">Your Contact:</label>
            <input type="number" className="form-control"  aria-describedby="contact"
              onChange={(e)=>{setData({...data,contact:e.target.value})}} required />
        </div>
            
        <div className="form-group">
          <label htmlFor="question1" className="form-label">Security Question 1</label>
           <p id="question1">What is your first School Name?</p>
        </div> 

         <div className="form-group">
          <label htmlFor="ans1" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer1" 
          aria-describedby="answer1" name="answer1" 
          onChange={(e)=>{setData({...data,securityAns1:e.target.value})}} required />
         </div>

         <div className="form-group">
          <label htmlFor="question2" className="form-label">Security Question 2</label>
          <p id="question2">What is your favourite pet animal?</p>
           
         </div> 

         <div className="form-group">
          <label htmlFor="ans2" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer2" 
          aria-describedby="answer2" name="answer2" 
          onChange={(e)=>{setData({...data,securityAns2:e.target.value})}} required />
         </div>

         <div className="form-group">
          <label htmlFor="question3" className="form-label">Security Question 3</label>
          <p id="question3">What is your favourite Holiday destination?</p>
        </div> 
          
        <div className="form-group">
          <label htmlFor="ans3" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer3" 
          aria-describedby="answer3" name="answer3" 
          onChange={(e)=>{setData({...data,securityAns3:e.target.value})}} required />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
    )
}

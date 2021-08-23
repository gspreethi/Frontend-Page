import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import PasswordReset from './PasswordReset';

export default function ForgotPassword() {

    let history=useHistory();
    let [response,setResponse]=useState({})
    
    const [data,setData]=useState({
        "userId":"",
	    "securityQue1":"",
        "securityAns1":"",
        "securityQue2":"",
        "securityAns2":"",
        "securityQue3":"",
        "securityAns3":"",
    })

    const handleValidation=(e)=>{

        e.preventDefault();
        console.log("from form",data);

        fetch(`http://localhost:8080/getQuestionsById/${data.userId}`)
        .then((response) => response.json())
        .then((res) =>{ 
          setResponse(res);
          
         if((data.securityAns1 === res.securityAns1) && (data.securityAns2 === res.securityAns2) && (data.securityAns3 === res.securityAns3) )
         {
             alert("Answers are matched")
             history.push(`PasswordReset/${data.userId}`)
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
        <h1 className="text-center pt-3 text-primary">Forgot your Password</h1>
        <form  onSubmit={handleValidation}>
                      
         <div className="form-group">
          <label htmlFor="userId" className="form-label">user Id</label>
          <input type="number" className="form-control"  id="userId" 
          aria-describedby="userId" name="userId" 
          onChange={(e)=>{setData({...data,userId:e.target.value})}} required />
          
        </div>

        <div className="form-group">
          <label htmlFor="que1" className="form-label">Question-1</label>
               <p id="que1">What is your first School Name?</p>
          </div> 


         <div className="form-group">
          <label htmlFor="answer1" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer1" 
          aria-describedby="answer1"
          onChange={(e)=>{setData({...data,securityAns1:e.target.value})}} required />
          </div>


         {/* question 2     */}
         <div className="form-group">
          <label htmlFor="question2" className="form-label">Question-2</label>
               <p id="question2">What is your favourite pet animal?</p>
           </div> 

         <div className="form-group">
          <label htmlFor="answer2" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer2" 
          aria-describedby="answer2" name="answer2" 
          onChange={(e)=>{setData({...data,securityAns2:e.target.value})}} required />
                 </div>

         {/* question 3     */}
         <div className="form-group">
          <label htmlFor="question3" className="form-label">Security Question 3</label>
               <p id="question3">What is your favourite Holiday destination?</p>
            </div> 
          
        <div className="form-group">
          <label htmlFor="answer3" className="form-label">Answer</label>
          <input type="text" className="form-control"  id="answer3" 
          aria-describedby="answer3" name="answer3" 
          onChange={(e)=>{setData({...data,securityanswer3:e.target.value})}} required />
        </div>

        <button type="submit" className="btn btn-success"  
         
        >Submit</button>
         
        
      </form>
        </div>
    )
}

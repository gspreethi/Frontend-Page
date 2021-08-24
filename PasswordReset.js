import React,{useState} from 'react'
import {useParams,useHistory} from "react-router-dom";

export default function PasswordReset() {

    let history=useHistory();
    const param=useParams();
    const userId=param.userId;
    console.log("id",userId);
    const [data,setData]=useState({
        "password":"",
        "ReEnterPassword":""
    })

    const handleReset=(e)=>{
        e.preventDefault();
    fetch(`http://localhost:8080/updatePassword/${user_id}/${data.password}`,{

        method: 'PATCH',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({password:data.password}),
    })
        
    .then((response) => response.json())
        .then((res) =>{ 
          console.log("updation",res);

         if((data.password === data.ReEnterPassword))
         {
             alert("password reseted successfully");
             history.push('UserLogin');
        }
         else{
             alert("password reset not successfull")
         }
        });
       }

    return (
        <div>
            <div className="container pt-5">
                <div className="row justify-content-sm-center pt-5">
                  <div className="col-sm-6 shadow round pb-3">
                        <h1 className="text-center pt-3 text-primary">Password Reset page</h1>
                    <form onSubmit={handleReset}>
                        <label htmlFor="password"> New Password</label>
                        <input type="password" id="password" className="form-control"  
                        onChange={(e)=>{setData({...data,password:e.target.value})}}
                        required/>

                    <label htmlFor="confirmPassword">Re-Enter Password</label>
                    <input type="password" id="confirmPassword" className="form-control"  
                        onChange={(e)=>{setData({...data,ReEnterPassword:e.target.value})}}
                        required/>

                    <button type="submit" >Reset</button>   
                    </form>
                  </div>
                </div>
            </div> 
        </div>    
                 
    )
}

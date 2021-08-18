import React,{useState} from "react";
import './Signup.css'



const Signup=()=> {
  const[data,setData]=useState(
    {
      firstname:'',
      lastname:'',
      Gender:'',
      DOB:'',
      ContactNumber:'',
      email:'',
      dob:'',
      password:'',
      confirmPassword:'',
    }
  )
  const {firstname,lastname,Gender,DOB,ContactNumber,email,password,confirmPassword}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const submitHandler=e=>{
    e.preventDefault();

    fetch("http://localhost:8080/insertDetails",{
      method:'POST',
      body:JSON.stringify(data),
      headers:{'Content-type':'application/json'}
    
    })
    .then(res=>res.json())
    .then(json=>setData(json.data))
    
    
   
     if(password !== confirmPassword)
    {
    alert("Passwords are not matching")
    }
    else{
      console.log(data);
    }

    
  }
  return (
    
    <div className='signup'>   
      <center>
        <div className='reg'>
        <h1>Registration Page</h1>
        </div>
        <div className="form">
        <form onSubmit={submitHandler}>
        Firstname: <input type="text" name="firstname" placeholder="firstname" value={firstname} onChange={changeHandler}/> <br/>
        Lastname:  <input type="text" name="lastname" placeholder="lastname" value={lastname} onChange={changeHandler}/> <br/>
        Gender:    <input type="text" name="Gender" placeholder="Gender" value={Gender} onChange={changeHandler}/> <br/>
        DOB:       <input type="Date" name="DOB" placeholder="DOB" value={DOB} onChange={changeHandler}/> <br/>
        Contact Number:    <input type="Number" name="ContactNumber" placeholder="ContactNumber" value={ContactNumber} onChange={changeHandler}/> <br/>
        Email:     <input type="email" name="email" placeholder="Email"  value={email} onChange={changeHandler}/>  <br/>
        Password:  <input type="password" name="password" placeholder="Password"   value={password} onChange={changeHandler}/>  <br/>
        Confirm Password:<input type="password" name="confirmPassword" placeholder="confirmpassword" value={confirmPassword} onChange={changeHandler}/>  <br/>
       {password !== confirmPassword ? <p style={{"color":"red"}}>passwords not matching</p>:null}
         <div className='submit'><input type="submit" name="submit" /> <br/>
         </div> 

        </form>
        </div>
      </center>






    </div>
     
    
  );
}

export default Signup;

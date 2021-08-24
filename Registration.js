import React from 'react'
import {useState} from 'react'
import { useForm } from "react-hook-form";
import PasswordRecovery from './PasswordRecovery';
//import { useHistory } from "react-router-dom";
//import {useSelector,useDispatch} from "react-redux";
//import LoginCreator from '../redux/LoginCreator';
//import {bindActionCreators} from "redux";
import {useHistory,Link} from "react-router-dom";

export default function Registration(){
  
  const history = useHistory();
  const [data,setData]=useState({
    firstName:'' ,
    lastName:'',
    dateOfBirth:'',
    gender:'',
    contactNumber:'',
    emailID:'',
    userID:'',
    password:'',
       })
  const {register,handleSubmit,formState: { errors },reset,trigger} = useForm();

const onPost = (data) => {
  // e.preventDefault();
    console.log(data);
  //postUserInfo(data);
 // history.pushState('/Signin');

  <div class="alert success">
  <span class="closebtn" style={{}}>&times;</span>  
  <strong>Success!</strong> Registered successfully
  </div>

const [open, setOpen] = useState(true);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


  fetch('http://localhost:8080/user',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{'Content-Type':'application/json'},
       })
        .then(res=>res.json())
        .then(json=>setData(json.data))
        alert("Registered successfully");
        history.push('/userlogin')
};

return (
  <div className="container pt-5">
    <div className="row justify-content-sm-center pt-5">
      <div className="col-sm-6 shadow round pb-3">
        <h1 className="text-center pt-3 text-primary">Register here </h1>
        <form  onSubmit={handleSubmit(onPost)}>

        <div className="form-group">
            <label className="col-form-label">User ID:</label>
            <input type="number" className={`form-control ${errors.userID && "invalid"}`}
              {...register("userID", { required: "UserID is Required"})}
             onKeyUp={() => {trigger("userID"); }}/>
             {errors.userID && (<small className="text-danger">{errors.userID.message}</small>)}
          </div>
          
          <div className="form-group">
            <label className="col-form-label">First Name:</label>
            <input type="text" className={`form-control ${errors.firstName && "invalid"}`}
              {...register("firstName", { required: "FirstName is Required" })}
              onKeyUp={() => {trigger("firstName"); }}/>
            {errors.firstName && (<small className="text-danger">{errors.firstName.message}</small>)}
          </div>

          <div className="form-group">
            <label className="col-form-label">Last Name:</label>
            <input type="text" className={`form-control ${errors.lastName && "invalid"}`}
              {...register("lastName", { required: "LastName is Required" })}
              onKeyUp={() => {trigger("lastName"); }}/>
            {errors.lastName && (<small className="text-danger">{errors.lastName.message}</small>)}
          </div>


          <div className="form-group">
            <label className="col-form-label">Date Of Birth:</label>
            <input type="date" className={`form-control ${errors.dateOfBirth && "invalid"}`}
              {...register("dateOfBirth", {required: "dateOfBirth is Required" })}
              onKeyUp={() => {trigger("dateOfBirth");}}/>
            {errors.dateOfBirth && (<small className="text-danger">{errors.dateOfBirth.message}</small>)}
          </div>
         
          
         <label className="col-form-label">Gender:</label>
         <div className="form-group">
         <input type="radio" value="Male" className={`${errors.gender && "invalid"}`}
         {...register("gender", {required: "Gender is required"})}/>Male
                       
        <input type="radio" value="Female" id="female"  className={`${errors.gender && "invalid"}`}
        {...register("gender", {required: "Gender is required"})}/>Female
 </div>
                    {errors.gender && (<small className="text-danger">{errors.gender.message}</small>)}
                

          <div className="form-group">
            <label className="col-form-label">Contact Number:</label>
            <input type="tel" className={`form-control ${errors.contactNumber && "invalid"}`}
              {...register("contactNumber", { required: "contactNumber is Required", maxLength:{value:'10',message:"Should be of 10 digits"},
              pattern: {value: /[0-9]{10}/, message: "Invalid phone no" }})}
              onKeyUp={() => {trigger("contactNumber"); }}/>
            {errors.contactNumber && (<small className="text-danger">{errors.contactNumber.message}</small>)}
          </div>

          <div className="form-group">
            <label className="col-form-label">Email ID:</label>
            <input type="email" className={`form-control ${errors.emailID && "invalid"}`}
              {...register("emailID", { required: "Email is Required" ,
              pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }})}
              onKeyUp={() => {trigger("emailID");}}/>
            {errors.emailID && (<small className="text-danger">{errors.emailID.message}</small>)}
          </div>
             
          <div className="form-group">
            <label className="col-form-label">Password:</label>
            <input type="password" className={`form-control ${errors.password && "invalid"}`}
              {...register("password", { required: "Password is Required" ,
              pattern: {value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, message: "Minimum 8 characters,letters, a number" }})}
             onKeyUp={() => {trigger("password"); }}/>
             {errors.password && (<small className="text-danger">{errors.password.message}</small>)}
          </div>

          <div style={{textAlign:'center'}} >
          <button type="button"  onClick={()=>setButtonPopup(true)} required >Security Questions</button>       
          
        </div>
<div>
          <button style={{textAlign:'center'}} variant="outlined" onClick={()=>setButtonPopup(true)} required>
        Password Recovery Questions
          </button><br/>
          <SecurityQuestionForm trigger={buttonPopup} setTrigger={setButtonPopup}/>
          </div>
          
          {/* <nav className="nav-item "  style={{color:'gray'}}>
         <Link className="nav-link" to="/PasswordRecovery" >Password Recovery Questions</Link>
        </nav> */}


          <button type="submit" className="btn btn-primary my-3"> Submit </button>   
        </form>
      </div>
    </div>
  </div>
);
            }

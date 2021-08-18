import React, {useState} from 'react'
import { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom'
import './LoginPage.css'
import axios from 'axios'
import {useStateValue} from './StateProvider'
import  Background from './images/background.jpg'






function LoginPage() {

    const [{}, dispatch] = useStateValue();

    let history=useHistory();
    const [id, setId] = useState('');
    const [userData, setUserData]=useState();
    const [userDataSuccess, setUserDataSuccess] = useState(false);
    const [ password, setPassword] = useState('');
    const [loginState, setLoginState] = useState(false)

    useEffect(()=>{
        const fetchdata = async() => {
            const result = await axios(
              `http://localhost:8081/api/getuser/${id}`,
            );
         
            setUserData(result.data);
            setUserDataSuccess(result.data.success)
          }
          fetchdata();
          setLoginState(false)
        },[id,loginState])


    const handleLogin = () =>{
        setLoginState(true)
        if(userDataSuccess===true){
            if( id===userData.user.userId ){
                if(password===userData.user.userPassword){
                    
                    dispatch({
                        type:'SET_USER',
                        user: userData.user
                    })
                    history.push('/')
                }else{
                    console.warn("incorrect password");
                }
            }
        }

    }

    return (
        
        <div className="LoginPage">
            
        <div >
            <Link to="/LoginPage" className="LoginPage__Bookname"><center><h1>GiftStore</h1></center></Link>
                <input className="LoginPage__InputId" type="text" placeholder="enter your Id"  value={id} onChange={(e) => setId(e.target.value)} />
           
                <input className="LoginPage__InputPassword" type="password" placeholder="enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} />
          
            <button className="LoginPage__LoginButton" onClick={ handleLogin}>Login</button>
        </div>
        

        <div>
            <h5>Sign up for GiftShop</h5>
            <div className='link'>
           <Link to="/signup">signup</Link>
           </div>
        </div>
       
        </div>
        
    )
}

export default LoginPage;

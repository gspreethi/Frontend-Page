import React from 'react'
import { Button } from 'reactstrap'
import {useHistory} from 'react-router-dom'
import './AdminHome.css'
import carousal from '';

function AdminHome() {
    let history= useHistory();
    
    return (
        <div className="adminHome">
        <carousal/>
        </div>
        <div>
        <h1>You can  Add category and gifts, Delete any , update any here</h1>
            <Button className="adminHome__addAgift" onClick={()=>{history.push('/addABook')}}> Maintain the products</Button>
        </div>
    )
}

export default AdminHome

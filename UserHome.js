import React from 'react'
import { Button } from 'reactstrap'
import {useHistory} from 'react-router-dom'
import './UserHome.css'
import carousal from '';

function UserHome() {
    let history= useHistory();
    
    return (
        <div className="UserHome">
        <carousal/>
        </div>
        <div>
        <h1>Browse to select the gift to ur loved ones</h1>
            <Button className="UserHome__addAgift" onClick={()=>{history.push('/addABook')}}> Browse</Button>
        </div>
    )
}

export default AdminHome

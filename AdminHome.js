import React from 'react'
import { Button } from 'reactstrap'
import {useHistory} from 'react-router-dom'
import './AdminHome.css'

function AdminHome() {
    let history= useHistory();
    
    return (
        <div className="adminHome">
            <Button className="adminHome__addAgift" onClick={()=>{history.push('/addABook')}}> Add a Gift</Button>
            <Button className="adminHome__deleteAgift" onClick={()=>{history.push('/deleteABook')}}> Delete a Gift</Button>
        </div>
    )
}

export default AdminHome

import React from 'react'
import './AddAgift.css'
import { useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function AddAgift() {
    let history=useHistory();
    const [giftname, setName] = useState("");
    const [giftcategory,setcategory]=useState("");
    const [giftimage, setImage] = useState("");
    const [giftprice, setPrice] = useState("");
    const [giftrating, setRating]= useState("");
    

    const handleOnClick =() => {
        console.log(giftname, giftprice)
        axios.post('http://localhost:8081/api/book',{
            
                name: giftname,
                image: giftimage,
                price: giftprice,
                rating: giftrating,
                

        })
        .then(function(response){
            console.log(response);
            console.log("gift added successfully")
            history.push('/giftAddedSuccessfully')
        })
        .catch(()=>{console.log("Error adding a gift");})
    }

    return (
        <div className="addAgift">
            <form className="addAgift__form container">
                <div className="addAgift__div">
                <label className="addAgift__label" htmlFor="giftName" >Name of the Gift:</label>
                <input type="text" className="addAgift__input"  value={giftname} onChange={(e) =>(setName(e.target.value))} required/>
                </div>
                <div className="addAgift__div">
                <label className="addAgift__label" htmlFor="giftcategory" >Category of the Gift:</label>
                <input type="text" className="addAgift__input"  value={giftcategory} onChange={(e) =>(setcategory(e.target.value))} required/>
                </div>
                <div className="addAgift__div">
                <label className="addAgift__label " htmlFor="imageUrl">Image Url:</label>
                <input type="text" className="addAgift__input"  value={giftimage} onChange={(e) =>(setImage(e.target.value))} required/>
                </div>  
                <div className="addAgift__div">
                <label className="addAgift__label" htmlFor="giftPrice" >Gift Price:</label>
                <input typr="number" className="addABook__input" value={giftprice} onChange={(e) =>(setPrice(e.target.value))} required />
                </div>
                <div className="addAgift__div">
                <label className="addAgift__label" htmlFor="bookRating" >Gift Rating:</label>
                <input type="text" className="addAgift__input" value={giftrating} onChange={(e) =>(setRating(e.target.value))} required/>
                </div>
                
                <button  onClick={handleOnClick}>Post</button>
            </form>
        </div>
    )
}

export default AddAgift
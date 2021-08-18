import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
  } from "reactstrap";

import './Deletegift.css'

function Deletegift() {
    const [input, setInput]= useState('')
    const [data, setData] = useState();
    const [success, setSuccess] =useState(false);

    useEffect(() => {
        var value="not mentioned"
        if(input!==''){
            value=input
        }
        const fetchdata = async() =>{
            await axios
            .get(`http://localhost:8081/api/bookbyName/${value}`)
            .then(function (response) {
              // handle success
              console.log("get gift by search");
    
              setSuccess(response.data.success)
              setData(response.data);
              console.log(response)
              //   console.log(response.data.book);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });

        }
        
        fetchdata();
    }, [input])

 
        return (
            <div className="deletegift">
                <form className="deletegift__form">
                    <label className="deleteItemSearchBox_label" htmlFor="deleteItemSearchBox"> Search for Item to Delete:
                    <input className="deleteItemSearchBox" type="text" id="deleteItemSearchBox" placeholder="seach for gift to delete" value={input} onChange={(e)=>{setInput(e.target.value)}} />
                    </label>
                </form>
                {(success===true)?<DeleteCard success={success} data={data.book}/>:<h2>Gift not found</h2>}
                
                
            </div>
        )
       
}

function DeleteCard(props) {

    let history = useHistory();
    const deleteCard = async(id) => {
        await axios.delete(`http://localhost:8081/api/deletebook/${id}`)
        
        .then(function(response){
            console.log(response)
        })
        console.log('Book deleted Successfully')
        history.push('/')
    }

        return (
            <div className="deleteCard">
            {props.data.map( item => (
                <div className="deleteCard" key={item._id}>
                <Card className="card">
                <CardImg className="cardImage"
                  src={item.image}
                />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{item.name}</CardTitle>
                  <CardText className="cardAuthor">By {item.author}</CardText>
                  <CardText className="cardPrice"><i className="fas fa-rupee-sign"></i>{item.price}</CardText>
                  <Button className="cardButton" onClick={()=>{deleteCard(item._id)}}>delete</Button>
                </CardBody>
              </Card>
                </div>
            ))}
            </div>
        )
  
}

export default Deletegift

import React,{useState, useEffect} from 'react';
import axios from 'axios';
// import ProductCard from './ProductCard';
import "./NewReleases.css"

import {Container} from 'reactstrap'

function NewReleases() {

    const[data,setData]=useState({book:[]});
    const[dropdownSelect,setDropdownSelect]=useState("All")

    useEffect(()=> {
        const fetchdata= async ()=>{
            var url="";
            if (dropdownSelect === ""){
                url="";
            } else if (dropdownSelect === ""){
                url ="";
            }
            const result =await axios(url);

            setData(result.data);
        };
        fetchdata();
    },[dropdownSelect]);


    if(data.book.length!==0){

        return(
            <div className="NewReleases">
                <h1><center>New Releases</center></h1>
                <div className="dropdownSelectDiv">
                    Filter by gifts:
                    <select
                      className="dropdownSelect"
                      onChange={(e)=>{
                          setDropdownSelect(e.target.value);
                      }}
                      >
                          <option value="All">All</option>
                          <option value=""></option>
                          <option value=""></option>
                      </select>
                </div>
                  <Container>

                  </Container>
            </div>
        );

    }
    return(
        <div></div>
    )

}




    

export default NewReleases

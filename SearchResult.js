import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import './SearchResult.css'

function SearchResult() {
  const [data, setData] = useState();
  const [success, setSuccess] =useState(false);
  let { name } = useParams();
  useEffect(() => {
    const fetchdata = async () => {
      await axios
        .get(`http://localhost:8081/api/bookbyName/${name}`)
        .then(function (response) {
          setData(response.data.book); 
          setSuccess(response.data.success)
        })
    };
    fetchdata();
  }, [name]);



    return (<div>
   {(success===true)?(<SearchCard data={data} success={success} />):(<h1 className="NoBookFound">No Book Found</h1>)}
    </div>
    )
  }

  
  function SearchCard(props) {
    return (

      <div>
     {props.data.map(item =>(
      <ProductCard key={item._id} id={item._id} name={item.name} image={item.image} price={item.price} author={item.author} year={item.year} rating={item.rating}/>
     ))}
      </div>
    )
  }

export default SearchResult;
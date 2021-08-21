import React,{useEffect, useState} from 'react'

import axios from 'axios'

export default function SortByAdmin() {

    const [categories,setCategories]=useState([])
    const [sorting,setSorting]=useState({
        "catTd":"",
        "categoryName":"",
        "type":""
    });

    const [options,setOptions]=useState([]);

    

    const BirthdayGifts=['select','Chocolates','Frames','flower-bouquet','Books','Personalized LED Rotating Crystal','Hampers','Cakes','Home Decor Items'];
    const AnniversaryGifts=['select','Couple T-Shirts','Cakes','Accessories','Photo-Canvas','Chocoaltes','Hampers'];
    const Raakhi=['select','Sweets','Chocolates','Accessories','Raakhi','Hampers'];
    const Friends=['select','Printed T-shirts','Cakes','Chocolates','Hampers','Customized gifts'];

    
        
            useEffect(()=>{

            if(sorting.category === "BirthdayGifts")
            {
                setOptions(BirthdayGifts)
                //console.log("sort",sorting.category);
            }
            else if(sorting.category === "AnniversaryGifts")
            {
                setOptions(AnniversaryGifts)
            }
            else if(sorting.category === "Raakhi")
            {
                setOptions(Raakhi)
            }
             
            else{
                setOptions(Friends)
            }
    
    
        },[sorting])

        const addCategory=(e)=>{
    
            e.preventDefault();
                       

                    fetch('http://localhost:8080/setSorting',{
                        method:'POST',
                        body:JSON.stringify(sorting),
                        headers:{'Content-Type':'application/json'},
               
                            })
           
                       .then(response=>response.json())
                       .then(res=>{
                           setSorting(res)
                          
                           alert("Added categories");
                      })
                      console.log(sorting);
                      
                }
       
       return (
        <div>
            <h1>Add category</h1>
            <form onSubmit={addCategory} >
            
        <div className="mb-3">
          <label htmlFor="catId" className="form-label">Category ID</label>
          <input type="text" className="form-control" id="catId" 
          name="catId"onChange={(e)=>{setSorting({...sorting,catId:e.target.value})}}/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="categoryname" className="form-label">Category Name</label>
          <select
          id="categoryname" onChange={(e)=>{setSorting({...sorting,categoryName:e.target.value})}}>
             <option>select category</option>
             <option value="Birthday">Birthday</option>
             <option value="Anniversary">Anniversary</option>
             <option value="Raakhi">Raakhi</option>
             <option value="For Friends">For Friends</option>
          </select>
          
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <select id="type" 
          onChange={(e)=>{setSorting({...sorting,type:e.target.value})}}>
              
              {
                  options.map((op,ind)=>{
                      return(
                          
                          <option value={op} key={ind}>{op}</option>
                      )
                  })
                 
                  
              }
          </select>
          
        </div>

        
      
        <button type="submit" className="btn btn-success">Submit</button>
         
        
      </form>
        </div>
    )
}

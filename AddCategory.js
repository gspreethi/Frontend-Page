import React,{useEffect, useState} from 'react'

//import axios from 'axios'

export default function AddCategory() {

    const [categories,setCategories]=useState([])
    const [cat,setCat]=useState({
        "catId":"", 
        "categoryName":"",
        "item":""
    });

    const [options,setOptions]=useState([]);

    const BirthdayGifts=['select','Chocolates','Frames','flower-bouquet','Books','Personalized LED Rotating Crystal','Hampers','Cakes','Home Decor Items'];
    const AnniversaryGifts=['select','Couple T-Shirts','Cakes','Accessories','Photo-Canvas','Chocoaltes','Hampers'];
    const Raakhi=['select','Sweets','Chocolates','Accessories','Raakhi','Hampers'];
    const Friends=['select','Printed T-shirts','Cakes','Chocolates','Hampers','Customized gifts'];
       
            useEffect(()=>{

            if(cat.categoryName === "BirthdayGifts")
            {
                setOptions(BirthdayGifts)
                //console.log("sort",sorting.category);
            }
            else if(cat.categoryName === "AnniversaryGifts")
            {
                setOptions(AnniversaryGifts)
            }
            else if(cat.categoryName === "Raakhi")
            {
                setOptions(Raakhi)
            }
            else{
                setOptions(Friends)
            }
     },[cat])

        const addcat=(e)=>{
            e.preventDefault();
                    fetch('http://localhost:8080/setCat',{
                        method:'POST',
                        body:JSON.stringify(cat),
                        headers:{'Content-Type':'application/json'},
               
                            })
           
                       .then(response=>response.json())
                       .then(res=>{
                           setCat(res)
                          
                           alert("Added category");
                      })
                      console.log(cat);
             }
       
       return (
        <div>
        <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-primary">Add Category</h1>
            <form onSubmit={addcat}>
            
        <div className="form-group">
          <label htmlFor="catId" className="form-label">Category ID</label>
          <input type="number" className="form-control" id="catId" 
          name="catId" onChange={(e)=>{setCat({...cat,catId:e.target.value})}}/>
    </div>

        <div className="form-group">
          <label htmlFor="categoryname" className="form-label">Category Name</label>
          <select className="form-control"
          id="categoryname" onChange={(e)=>{setCat({...cat,categoryName:e.target.value})}}>
             <option>select category</option>
             <option value="Birthday">Birthday</option>
             <option value="Anniversary">Anniversary</option>
             <option value="Raakhi">Raakhi</option>
             <option value="For Friends">For Friends</option>
          </select>
       </div>

        <div className="form-group">
          <label htmlFor="Item" className="form-label">Item</label>
          <select id="item" className="form-control"
          onChange={(e)=>{setCat({...cat,item:e.target.value})}}>
               {
                  options.map((op,ind)=>{
                      return(
                          <option value={op} key={ind}>{op}</option>
                      )
                  })
               }
          </select>
       </div>

        <button type="submit" className="btn btn-success">Add Category</button>
     </form>
        </div>
        </div>
        </div>
        </div>
    )
}

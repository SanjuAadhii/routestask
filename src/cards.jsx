import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";


function Cards({courseDetails,viewDetails}) {
    // var [addOrRemove,setAddOrRemove]= useState(true)
  return (
    <>
    
            <div className="card" style={{ width: "18rem" }}>
                <img src={courseDetails.img} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{courseDetails.title}</h5>
                <p className="card-text">{courseDetails.description}</p>
                <button onClick={()=>{viewDetails(courseDetails)}}><Link to={`/${courseDetails.title}`}>View Details</Link></button>
                    
                    
                
                </div>
            </div>
           
   

</>
    
   
  )
}

export default Cards

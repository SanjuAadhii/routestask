import React from 'react'

function Javascript({course}) {
  return (
    <>
    
            <div className="card" style={{ width: "18rem" }}>
                <img src={course.img} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                {/* <button onClick={()=>{viewDetails(courseDetails)}}><Link to={`/${courseDetails.title}`}>View Details</Link></button> */}
                    
                    
                
                </div>
            </div>
           
   

</>
    
   
  )
}

export default Javascript
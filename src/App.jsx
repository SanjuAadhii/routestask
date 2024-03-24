import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.css"
import Cards from './cards';
import Python from './Python';
import C from './C';
import Cpp from './Cpp';
import Java from './Java';
import Javascript from './Javascript';
import Ruby from './Ruby';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';


// import './App.css'
// import Navbar from './Navbar'


function App() {
  var [course,setCourse]= useState({});
 
  let viewDetails = (courseDetails) => {
  setCourse(courseDetails)
    
  };
  
  var courseDetails=[
    {
      img:"https://cdn.pixabay.com/photo/2016/06/20/04/30/asian-man-1468032_1280.jpg",
      title:"Python",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
     
    },
    {
      img:"https://cdn.pixabay.com/photo/2014/08/26/21/48/jeans-428613_1280.jpg",
      title:"C",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
      

    },
    {
      img:"https://cdn.pixabay.com/photo/2011/08/18/01/18/plate-cap-8936_1280.jpg",
      title:"Cpp",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
      
    },
    {
      img:"https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
      title:"Java",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
      
    },
    {
      img:"https://cdn.pixabay.com/photo/2017/06/17/16/16/amazing-2412612_1280.jpg",
      title:"Javascript",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
     
    },
    {
      img:"https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096_1280.jpg",
      title:"Ruby",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi accusamus harum optio beatae veniam delectus porro!",
   
    },


  ]

  

  return (
   <>
   <BrowserRouter>
   <Routes>
   
   <Route path='/' 
   element={
    <>
   <Navbar/>
   <div className='container'>
        <div className='row mt-5'>
            {
             courseDetails.map((items,index)=> (<div className='col-4 mt-5' key={index}>
              <Cards courseDetails={items} viewDetails={viewDetails} />
              
              {/* <Cards courseDetails={items} viewDetails={viewDetails} />
              <Cards/> */}
              
              
              </div>))
             } 
            </div>
            </div>
    </> }></Route>
   <Route path='/Python' element={<Python course={course}/>}></Route>
   <Route path='/C' element={<C course={course}/>}></Route>
   <Route path='/Cpp' element={<Cpp course={course}/>}></Route>
   <Route path='/Java' element={<Java course={course}/>}></Route>
   <Route path='/Javascript' element={<Javascript course={course}/>}></Route>
   <Route path='/Ruby' element={<Ruby course={course}/>}></Route>
   </Routes>
   </BrowserRouter>
  
   

            
   
   
   </>
  )
}

export default App
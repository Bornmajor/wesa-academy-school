import React, { useContext,useRef, useState } from 'react'
import TopBar from '../components/TopBar'
import { Outlet } from 'react-router'
import MyContext from '../context/context'
import AppLoader from '../components/AppLoader'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import CopyrightSection from '../components/CopyrightSection'
import Footer from '../components/Footer'





const Root = () => {
  const {isAppLoading,setIsAppLoading,setNavBarIsOpen} = useContext(MyContext);
  const location = useLocation();



  //update page title
  const updatePageTitle = (location) =>{
   if(location === '/'){
    document.title = "Home";
   }else if(location === '/about'){
    document.title = "About";
   }else if(location === '/staff'){
    document.title = "Staff";
   }else if(location === '/careers'){
    document.title = "Careers";
   }
  }


  


  useEffect(()=>{

       
       setIsAppLoading(true)
     // Your code to run when the route changes
      console.log('Route changed:', location.pathname);
      setTimeout(() => {
      setIsAppLoading(false)  
      }, 500);
      
   

      setTimeout(() => {
         window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }); 
      }, 1000);
    
      updatePageTitle(location.pathname);

      //close navbar on change route
      setNavBarIsOpen(false);



      //scroll to given div when url has hash #div
      setTimeout(() => {
         if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the '#' from the hash
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
      }, 1000);
       // Check if there is a hash in the URL
   
  
    },[location])

  return (
   <>
   {isAppLoading ?
   <div className='d-flex justify-content-center align-items-center vh-100'>
    <AppLoader /> 
   </div>
    
   
  :
  <>
    <TopBar />
   <Outlet />
   <Footer />
   <CopyrightSection />
  </>

  }
   
   </>
  )
}

export default Root
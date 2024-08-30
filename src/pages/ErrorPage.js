import React, { useEffect, useState } from 'react'
import { useRouteError,useNavigate } from 'react-router-dom'
import NoItemPlaceholder from '../components/NoItemPlaceholder';
import questionImg from '../assets/images/question-bro.png'

const ErrorPage = () => {
  const navigate = useNavigate();
  const error  = useRouteError();

 

  useEffect(()=>{
  console.log(error.status)
  if(error.status == '404'){
    document.title = '404 Page not found';
  }
  },[error]);

  const redirectHome = () =>{
    navigate('/');
  }

  return (
   <>
   <NoItemPlaceholder
    src={questionImg}
    title={error.status == '404' ? '404 error' : 'Something went wrong'}
    subtitle={error.status == '404' ? 'Page not found' : 'Something went wrong'}
    btnTitle="Return home"
    callBackAction={redirectHome}
   
   />
   </>
  )
}

export default ErrorPage;
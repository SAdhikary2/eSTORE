import React from 'react';
import Layout from "./../components/Layout/Layout";
import image from "../images/pagenot.jpg"
import './pageNotFound.css'

const pageNotFound = () => {
  return (
    <Layout>
   
    <div className='imageclass'>
  
  <img src={image} alt="404 Error" />
  <a href="/">Return to Home Page</a>
</div>

  

  </Layout>
  )
}

export default pageNotFound

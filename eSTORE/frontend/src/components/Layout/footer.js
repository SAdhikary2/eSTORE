import React from 'react'
import {Link} from 'react-router-dom'

function footer() {
  return (
    <div className='footer'>
     <h6 className='text-center'>All Right Reseserved &copy; Sukalyan Adhikary</h6>
     <p className='text-center mt-1'>
      <Link to='/about'>About</Link>| <Link to='/contact'>Contact</Link>| <Link to='/pageNotFound'>Privacy Policy</Link> 
     </p>
    </div>
  );
}

export default footer

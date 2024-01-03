import React from 'react'
import Layout from './../components/Layout/Layout'
import "./About.css"
import Image from '../images/MyImage.jpg'

const About = () => {
  return (
    <Layout title={"About -eSTORE"}>
    
   <div className="container">
  <h2>About Us</h2>
  <p>Welcome to Your E-commerce Store, where we strive to provide you with the best online shopping experience. Our goal is to offer a wide range of high-quality products, excellent customer service, and secure transactions.</p>
  <h2>Our Mission</h2>
  <p>At Your E-commerce Store, we are dedicated to meeting the diverse needs of our customers. Whether you're looking for the latest fashion trends, electronics, home essentials, or unique gifts, we've got you covered. Our mission is to make online shopping convenient, enjoyable, and reliable for everyone.</p>
  <h2>Meet the Team</h2>
  <p>Our team consists of passionate individuals who are committed to delivering top-notch service. From our customer support representatives to our logistics experts, each team member plays a crucial role in ensuring your satisfaction.</p>
  <img className='imageClass' src={Image} alt="Our Team" />
  <h2>Contact Us</h2>
  <p>If you have any questions, concerns, or feedback, please don't hesitate to contact us. We value your input and are here to assist you in any way we can.</p>
  <p>Email: info@yourstore.com<br />
    Phone: 123-456-7890</p>
</div>




    </Layout>
  )
}

export default About

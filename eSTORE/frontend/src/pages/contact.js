import React from "react";
import Layout from "./../components/Layout/Layout";
import './Contact.css'
const contact = () => {
  return (
    <Layout title={"Contact -eSTORE"}>
    <div className="upper">
  <div className="container">
  <div className="wrapper">
    {/* COMPANY INFORMATION */}
    <div className="company-info">
      <h3>eSTORE</h3>
      <ul>
        <li><i className="fa fa-road" /> 44 Main Street</li>
        <li><i className="fa fa-phone" /> (555) 555-5555</li>
        <li><i className="fa fa-envelope" /> eSTORE33@gmail.com</li>
      </ul>
    </div>
    {/* End .company-info */}
    {/* CONTACT FORM */}
    <div className="contact">
      <h3>E-mail Us</h3>
      <form id="contact-form">
        <p>
          <label>Name</label>
          <input type="text" name="name" id="name" required />
        </p>
        <p>
          <label>Company</label>
          <input type="text" name="company" id="company" />
        </p>
        <p>
          <label>E-mail Address</label>
          <input type="email" name="email" id="email" required />
        </p>
        <p>
          <label>Phone Number</label>
          <input type="text" name="phone" id="phone" />
        </p>
        <p className="full">
          <label>Message</label>
          <textarea name="message" rows={5} id="message" defaultValue={""} />
        </p>
        <p className="full">
          <button type="submit">Submit</button>
        </p>
      </form>
      {/* End #contact-form */}
    </div>
    {/* End .contact */}
  </div>


    </div>
  </div>

    </Layout>
  );
};

export default contact;

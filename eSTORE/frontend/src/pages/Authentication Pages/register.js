import React from "react";
import Layout from "./../../components/Layout/Layout";
import "../Authentication Pages/register.css";

const register = () => {
  return (
    <Layout>
      <div className="register">
        <form className="mt-5 formsec">
          <div className="mb-3">
            <input
              type="text"
              className="form-control "
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              aria-describedby="emailHelp"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              id="exampleInputNumber"
              aria-describedby="emailHelp"
              placeholder="Enter Your Phone"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputadress"
              placeholder="enter your address"
            />
          </div>
          
          <button type="submit" className="btn btn-danger  ">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default register;

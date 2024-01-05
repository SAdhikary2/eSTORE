import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../Authentication Pages/register.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //for posting register data
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somethings went wrong");
    }
  };

  console.log(process.env.REACT_APP_API);

  return (
    <Layout>
      <div className="register">
        <form className="mt-5 formsec" onSubmit={handleSubmit}>
          <h2>Registration</h2>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control "
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              aria-describedby="emailHelp"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputNumber"
              aria-describedby="emailHelp"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputadress"
              placeholder="enter your address"
              required
            />
          </div>

          <button type="submit" className="btn btn-danger registerBtn ">
            Submit
          </button>
          <p>
            Do Have Already Account ? <a href="">Login</a>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Register;

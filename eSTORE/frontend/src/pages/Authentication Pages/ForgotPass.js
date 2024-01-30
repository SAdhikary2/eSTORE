import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../Authentication Pages/register.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setnewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //for posting register data
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newpassword, answer }
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


  return (
    <Layout title={"Forgot Password -eSTORE"}>
      <div className="register">
        <form className="mt-5 formsec loginform" onSubmit={handleSubmit}>
          <h2>Reset Password</h2>

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
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              aria-describedby="emailHelp"
              placeholder="Enter Your Favourite Food ?"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={newpassword}
              onChange={(e) => setnewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              aria-describedby="emailHelp"
              placeholder="Enter New Password"
              required
            />
          </div>
          

          <button type="submit" className="btn btn-danger registerBtn ">
            Reset Password
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPass;

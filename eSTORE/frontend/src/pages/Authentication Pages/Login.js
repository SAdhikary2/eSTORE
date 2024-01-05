import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../Authentication Pages/register.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth]=useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //for posting register data
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token: res.data.token,
        })

        //for saving data in localStorage
        localStorage.setItem('auth',JSON.stringify(res.data))

        navigate("/");
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
        <form className="mt-5 formsec loginform" onSubmit={handleSubmit}>
        <h2>Login</h2>
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

          <button type="submit" className="btn btn-danger registerBtn ">
          
            Submit
          </button>

          <p>New to eSTORE ? <a href="">Sign Up  </a></p>
          <p><a href="">Forgot Password ?</a></p>
         
        </form>
      </div>
    </Layout>
  );
};

export default Login;

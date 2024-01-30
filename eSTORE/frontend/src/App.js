import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import PageNotFound from "./pages/pageNotFound";
import Register from "./pages/Authentication Pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Authentication Pages/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/PrivateRoute";
import ForgotPass from "./pages/Authentication Pages/ForgotPass";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>

        <Route path="/about" element={<About />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/forgot-password" element={<ForgotPass />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

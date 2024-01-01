import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div>
      <Header />

      <main style={{minHeight:'76vh'}}>{props.children}</main>

      <Footer />
    </div>
  );
};

export default Layout;

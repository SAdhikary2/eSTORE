import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />

      <main style={{ minHeight: "76vh" }}>{children}</main>

      <Footer />
    </div>
  );
};

//setting default data for SEO
Layout.defaultProps ={
  title : "eSTORE - Ecommerce website",
  description:"This is online shopping website",
  keywords:" online Shopping, mernStack",
  author:"Sukalyan Adhikary",
}


export default Layout;

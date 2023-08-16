// components/Layout.js
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My Customer App</h1>
        <nav>{/* Add navigation links here */}</nav>
      </header>
      <main>{children}</main>
      <footer>{/* Add footer content here */}</footer>
    </div>
  );
};

export default Layout;

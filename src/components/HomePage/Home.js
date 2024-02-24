import React from "react";
import Product from "./Product";
const Home = () => {
  const items = JSON.parse(localStorage.getItem("cart"));
  return (
    <div>
      {/* navbar which contains cart options */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
          backgroundColor: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "black",
            margin: "0",
            padding: "20px",
            fontSize: "30px",
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Shopping Cart
        </h1>
        <div>
          <span
            style={{
              textAlign: "center",
              color: "black",
              margin: "0",
              padding: "20px",
              fontSize: "20px",
              fontWeight: "bold",
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Cart {items?.length}
          </span>
        </div>
      </nav>
      <Product />
    </div>
  );
};

export default Home;

import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const Cart = ({ cart, setCart }) => {
  const removeItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };
  localStorage.setItem("cart", JSON.stringify(cart.length));

  const Checkout = (
  ) => {
    const total = cart.reduce((a, c) => a + c.price, 0);
    const totalItems = cart.length;
    const cartData = {
      cart: cart,
      total: total,
      totalItems: totalItems,
    };
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("Checkout Successful");
  }
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {cart.map((product) => (
          <Card key={product.id} sx={{ maxWidth: 345, margin: 2 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${product.price}
              </Typography>
            </CardContent>
            <Button size="small" onClick={() => removeItem(product)}>
              Remove
            </Button>
          </Card>
        ))}
      </Box>
      {/* Checkout with total price and items */}
      <h1 style={{ textAlign: "center" }}>
        Total Price: ${cart.reduce((a, c) => a + c.price, 0)}
      </h1>
      <h1 style={{ textAlign: "center" }}>Total Items: {cart.length}</h1>
      {/* Checkout Button */}

      <div style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ margin: "10px" }}
          onClick={
            () => Checkout()
          }
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;

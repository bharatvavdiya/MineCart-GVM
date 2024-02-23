// Product.js:

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

import Data from "./ProductData";
import Cart from "./Cart";
const Product = () => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Item added to cart");
  };

  // Search product and filter product
  const [search, setSearch] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  React.useEffect(() => {
    setFilteredProducts(
      Data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div>
      <Box>
        <input
          type="text"
          placeholder="Search Product"
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            sx={{
              maxWidth: 345,
              margin: 2,
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: "center" }}
              >
                {product.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textAlign: "center" }}
              >
                Price: ${product.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => addToCart(product)}
                style={{ margin: "0 auto" }}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      {/* Make Cart Compnent separate */}

      <h1
        style={{
          textAlign: "center",
        }}
      >
        Cart
      </h1>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
};

export default Product;

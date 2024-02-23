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

  // Sort product by price and filter product same time
  const [sort, setSort] = React.useState("");
  const [sortedProducts, setSortedProducts] = React.useState([]);

  React.useEffect(() => {
    if (sort === "asc") {
      setSortedProducts(filteredProducts.sort((a, b) => a.price - b.price));
    } else if (sort === "desc") {
      setSortedProducts(filteredProducts.sort((a, b) => b.price - a.price));
    } else {
      setSortedProducts(filteredProducts);
    }
  }, [sort, filteredProducts]);

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

      <Box>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        >
          <option value="">Default</option>
          <option value="desc">Low to High</option>
          <option value="asc">High to Low</option>
        </select>
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
              {/* View Details */}
              <Button
                size="small"
                href={`/product/${product.id}`}
                style={{ margin: "0 auto" }}
              >
                View Details
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

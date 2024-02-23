// ProductDetails.js

import React from "react";
import { useParams } from "react-router-dom";
import Data from "./ProductData";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const product = Data.find((p) => p.id === parseInt(id));

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Specifications: {product.specifications}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Colors: {product.colors}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Storage: {product.storage}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ProductDetails;

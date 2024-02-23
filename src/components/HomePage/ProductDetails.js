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
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 345, margin: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ProductDetails;

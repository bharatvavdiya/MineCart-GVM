// Utilize local storage Cart data and show vendor and product type and details of the product and total price in the admin page to show the sales report.

// Path: src/components/AdminPage/Dashboard.js

import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const Dashboard = () => {
   const cart = JSON.parse(localStorage.getItem("cart"));
   return (
      <div>
         <h1 style={{ textAlign: "center" }}>Sales Report</h1>
         <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
         {cart.map((product) => (
            <Card key={product.id} sx={{ maxWidth: 345, margin: 2 }}>
               <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {product.title}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Vendor: {product.vendor}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Product Type: {product.type}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  Price: ${product.price}
               </Typography>
               </CardContent>
            </Card>
         ))}
         </Box>
         <h1 style={{ textAlign: "center" }}>
         Total Price: ${cart.reduce((a, c) => a + c.price, 0)}
         </h1>
         <h1 style={{ textAlign: "center" }}>Total Items: {cart.length}</h1>
      </div>
   );
}
export default Dashboard;


import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="signin-top">
      <div className="signIn-main">
        <Box sx={{ padding: "44px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ fontSize: "20px" }}>Welcome to MineCart</Box>
            <Box>
              No Account ?<br />
              <span
                style={{ color: "#B87514", cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Sign in
              </span>
            </Box>
          </Box>
          <Box sx={{ fontSize: "55px", fontWeight: "500" }}>Sign up</Box>
          <Box sx={{ mt: 3 }}>
            <Box>
              <label className="input-lable"></label>
              <input
                type="text"
                className="input-text"
                placeholder="Username or email address"
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <label className="input-lable"></label>
              <input type="text" className="input-text" placeholder="Name" />
            </Box>
            <Box sx={{ mt: 3 }}>
              <label className="input-lable"></label>
              <input
                type="text"
                className="input-text"
                placeholder="Password"
              />
            </Box>
            <Box
              sx={{
                textAlign: "right",
                mt: 1,
                color: "#AD3113",
                cursor: "pointer",
              }}
            >
              Forgot Password
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{ background: "#E48700", color: "#fff", mt: 3, pt: 2, pb: 2 }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Signup;

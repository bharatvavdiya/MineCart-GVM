import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/login";
import Home from "./components/HomePage/Home";
import ProductDetails from "./components/HomePage/ProductDetails";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;

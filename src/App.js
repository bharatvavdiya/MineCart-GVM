import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/login";
import Home from "./components/HomePage/Home";
import ProductDetails from "./components/HomePage/ProductDetails";
import Layout from "./components/Dashboard/Layout";
import SalesList from "./components/Dashboard/SalesList";
import DashBoard from "./components/Dashboard/DashBoard";
function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Routes>
      <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      <Route path="/product/:id" element={user ? <ProductDetails /> :
        <Navigate to="/" />
      } />
      <Route element={<Layout />}>
        <Route path="/admin/dashboard" element={< DashBoard />} />
        <Route path="/admin/saleslist" element={< SalesList />} />
      </Route>
    </Routes>
  );
}

export default App;

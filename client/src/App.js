import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CheckOut from "./pages/CheckOut";
import Orders from "./pages/Orders";
import AdminHome from "./pages/admin/AdminHome";
import Unknown from "./pages/Unknown";
import AdminItems from "./pages/admin/AdminItems";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminNew from "./pages/admin/AdminNew";
import AdminEdit from "./pages/admin/AdminEdit";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/checkout" exact element={<CheckOut />} />
          <Route path="/orders" exact element={<Orders />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/itemlist" element={<AdminItems />} />
          <Route path="/admin/orderlist" element={<AdminOrders />} />
          <Route path="/admin/newitem" element={<AdminNew />} />
          <Route path="/admin/edititem/:id" element={<AdminEdit />} />
          <Route path="*" element={<Unknown />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

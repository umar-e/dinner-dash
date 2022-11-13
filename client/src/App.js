import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CheckOutPage from "./pages/CheckOutPage";
import OrdersPage from "./pages/OrdersPage";
import AdminPage from "./pages/AdminPage";
import ItemList from "./components/admin/ItemList";
import OrderList from "./components/admin/OrderList";
import NewItem from "./components/admin/NewItem";
import EditItem from "./components/admin/EditItem";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/cart" exact element={<CartPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/checkout" exact element={<CheckOutPage />} />
          <Route path="/orders" exact element={<OrdersPage />} />
          <Route path="/admin/itemlist" element={<ItemList />} />
          <Route path="/admin/orderlist" element={<OrderList />} />
          <Route path="/admin/newitem" element={<NewItem />} />
          <Route path="/admin/edititem/:id" element={<EditItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

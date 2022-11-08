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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/cart" exact element={<CartPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/checkout" exact element={<CheckOutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

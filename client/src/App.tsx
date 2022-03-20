import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import GlobalStyles from "./style/GlobalStyles";
import Products from "./pages/products/Products";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products addToCart={() => null} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

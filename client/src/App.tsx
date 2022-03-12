import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import GlobalStyles from "./style/globalStyles";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </Router>
  );
};

export default App;

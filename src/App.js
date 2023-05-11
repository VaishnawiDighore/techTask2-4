import "./App.css";
import Nav from "./Components/Header/nav";
import Home from "./Components/Header/Home";
import About from "./Components/Routing/About";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Routing/Products";
import ProductDetails from "./Components/Routing/ProductDetails";
import PageNotFound from "./Components/Routing/PageNotFound";
import Counter from "./Components/Counter/Counter";

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Counter/>
    </div>
  );
}

export default App;

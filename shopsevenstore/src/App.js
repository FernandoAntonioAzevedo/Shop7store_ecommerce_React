
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
    .then((res) => res.json())
    .then((data) => setProducts(data.products));
  }, [])

  return (  
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
           <Route path="/" element={<HomePage products={products}/>} />
           <Route 
            path="/products" 
            element={<ProductsPage products={products}/>} 
           />
          </Routes>
        
        </main>        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

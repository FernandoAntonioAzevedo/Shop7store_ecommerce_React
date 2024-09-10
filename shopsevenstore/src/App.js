
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (  
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Header />
          <div className="page-inner-content">
            <div className="section-title">
            </div>            
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

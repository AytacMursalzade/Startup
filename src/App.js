import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import HeaderArrage from "./components/HeaderArrage";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderArrage />
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

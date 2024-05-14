import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArtAuction from "./pages/ArtAuction";
import Antiques from "./pages/Antiques";
import Automotive from "./pages/Automotive";
import BookAuction from "./pages/BookAuction";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/artauction" element={<ArtAuction />} />
          <Route path="/antiques" element={<Antiques />} />
          <Route path="/automotive" element={<Automotive />} />
          <Route path="/bookauctions" element={<BookAuction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

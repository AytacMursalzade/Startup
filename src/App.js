import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArtAuction from "./pages/ArtAuction";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/artauction" element={<ArtAuction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

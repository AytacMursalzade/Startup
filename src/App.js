import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArtAuction from "./pages/ArtAuction";
import Antiques from "./pages/Antiques";
import Automotive from "./pages/Automotive";
import BookAuction from "./pages/BookAuction";
import CattleAuction from "./pages/CattleAuction";
import Militaria from "./pages/Militaria";
import Coins from "./pages/Coins";
import SelfStorage from "./pages/SelfStorage";
import RealEstate from "./pages/RealEstate";
import ToursVacantions from "./pages/ToursVacantions";

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
          <Route path="/cattleauctions" element={<CattleAuction />} />
          <Route path="/militaria" element={<Militaria />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/selfstorage" element={<SelfStorage />} />
          <Route path="/realestate" element={<RealEstate />} />
          <Route path="/toursvacantions" element={<ToursVacantions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

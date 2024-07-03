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
import CountDown from "./pages/CountDown";
import ShopAuction from "./pages/ShopAuction";
import Machine from "./pages/Machine";
import Handmade from "./pages/Handmade";
import Government from "./pages/Government";
import Domain from "./pages/Domain";
import Memorabilia from "./pages/Memorabilia";
import Freelancer from "./pages/Freelancer";
import Laboratory from "./pages/Laboratory";
import NFTMarketplace from "./pages/NFTMarketplace";
import Fundraising from "./pages/Fundraising";
import ListAuction from "./pages/ListAuction";
import SaleBanners from "./pages/SaleBanners";
import ClientSlider from "./components/ClientSlider";
import PricingTables from "./pages/PricingTables";
import ShopFeatures from "./pages/ShopFeatures";
import BestSelling from "./components/BestSelling";
import Features from "./components/Features";
import ProductCategory from "./components/ProductCategory";
import RecentAdded from "./pages/RecentAdded";
import SaleProducts from "./pages/SaleProducts";
import SinglePages from "./pages/SinglePages";
import MyAccountnew from "./pages/MyAccountnew";
import MyBasket from "./pages/MyBasket";
import Checkout from "./pages/Checkout";
import Shortcodes from "./pages/Shortcodes";
import AccordionData from "./components/AccordionData";
import GrisSystem from "./components/GrisSystem";
import PieChart from "./components/PieChart";
import CountersShort from "./components/CountersShort";
import ShopShort from "./components/ShopShort";
import ServicesTable from "./components/ServicesTable";
import BarTables from "./components/BarTables";
import MemberSlide from "./components/MemberSlide";
import TerminalSlider from "./components/TerminalSlider";
import ShortcodesApp from "./pages/ShortcodesApp";
import BoxedLayoutApp from "./components/BoxedLayout";
import PostCarousel from "./pages/PostCarousel";
import NewsFiltered from "./pages/NewsFiltered";
import BlogMinimal from "./pages/BlogMinimal";
import BlogSimpleApp from "./pages/BlogSimpleApp";
import MediaTwoColumn from "./pages/MediaTwoColumn";
import MediaThreeColApp from "./pages/MediaThreeColApp";
import MediaFourCol from "./components/MediaFourCol";
import MediaFourApp from "./pages/MediaFourApp";
import ProjectTwoApp from "./pages/ProjectTwoApp";
import ProjecThreeApp from "./pages/ProjecThreeApp";
import ProjectFourApp from "./pages/ProjectFourApp";
// import ShorrtC from "./pages/ShorrtC";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/artauctions" element={<ArtAuction />} />
          <Route path="/antiques" element={<Antiques />} />
          <Route path="/automotive" element={<Automotive />} />
          <Route path="/bookauctions" element={<BookAuction />} />
          <Route path="/cattleauctions" element={<CattleAuction />} />
          <Route path="/militaria" element={<Militaria />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/selfstorage" element={<SelfStorage />} />
          <Route path="/realestate" element={<RealEstate />} />
          <Route path="/toursvacantions" element={<ToursVacantions />} />
          <Route path="/countdown" element={<CountDown />} />
          <Route path="/shopauctions" element={<ShopAuction />} />
          <Route path="/machineauction" element={<Machine />} />
          <Route path="/handmadeauctions" element={<Handmade />} />
          <Route path="/government" element={<Government />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/memorabilia" element={<Memorabilia />} />
          <Route path="/freelancer" element={<Freelancer />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/nftmarketplace" element={<NFTMarketplace />} />
          <Route path="/fundraising" element={<Fundraising />} />
          <Route path="/listauction" element={<ListAuction />} />
          <Route path="/salebanners" element={<SaleBanners />} />
          <Route path="/clientslider" element={<ClientSlider />} />
          <Route path="/pricingtables" element={<PricingTables />} />
          <Route path="/shopfeatures" element={<ShopFeatures />} />
          <Route path="/bestselling" element={<BestSelling />} />
          <Route path="/features" element={<Features />} />
          <Route path="/productcategory" element={<ProductCategory />} />
          <Route path="/recentadded" element={<RecentAdded />} />
          <Route path="/salesproducts" element={<SaleProducts />} />
          <Route path="/singlepages" element={<SinglePages />} />
          <Route path="/myaccountnew" element={<MyAccountnew />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/mybasket" element={<MyBasket />} />
          <Route path="/shortcodes" element={<ShortcodesApp />} />
          <Route path="/boxedlayoutapp" element={<BoxedLayoutApp />} />
          <Route path="/postcarousel" element={<PostCarousel />} />
          <Route path="/newsfiltered" element={<NewsFiltered />} />
          <Route path="/blogminimal" element={<BlogMinimal />} />
          <Route path="/blogsimpleapp" element={<BlogSimpleApp />} />
          <Route path="/mediatwocolumn" element={<MediaTwoColumn />} />
          <Route path="/mediathreecolumn" element={<MediaThreeColApp />} />
          <Route path="/mediafourcolumn" element={<MediaFourApp />} />
          <Route path="/projectwo" element={<ProjectTwoApp />} />
          <Route path="/projecthree" element={<ProjecThreeApp />} />
          <Route path="/projecfour" element={<ProjectFourApp />} />
          {/* <Route path="/shorthcodes" element={<ShorrtC />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

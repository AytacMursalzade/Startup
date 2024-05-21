import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav className="flex justify-around items-center px-[20px]  ml-[36px] ">
      <div className="nav-container">
        <input
          className="search-input bg-[white] mr-[900px] mt-[50px] border border-black   px-[30px] py-[8px] "
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search..."
        />
      </div>
      <div className="profile-container">
        <Link to="#">
          <FiHeart className="nav-icons" />
        </Link>
        <Link to="">
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>
        <Link to="">
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
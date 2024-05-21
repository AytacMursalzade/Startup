import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar w-[15%] fixed h-[100%] z-[3px] flex flex-col items-center">
        <div className="logo-container mb-[56px] ">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
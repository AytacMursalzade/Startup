import Input from "../Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title text-[22px] font-normal mb-[20px] ">Category</h2>

      <div>
        <label className="sidebar-label-container relative pl-[35px] mb-[12px] pointer ">
          <input className="absolute opacity-0 pointer " onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark absolute top-0 left-0 h-[20px] w-[20px] bg-[#eee] rounded-[50%] "></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
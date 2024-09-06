import React from "react";
import { useSelector } from "react-redux";

const Filter = ({ filter, clear, price }) => {
  const categories = useSelector((state) => state.usersD.categories);

  return (
    <div className="filters">
      <form>
        <fieldset>
          <legend>Filter</legend>
          <label> filter by: Price </label>
          <input
            type="range"
            name="price"
            min="0"
            max="900"
            step="5"
            defaultValue="0"
            onChange={filter}
          />
          {price + "$ "}
          <select name="category" onChange={filter}>
            {categories.map((category) => {
              return (
                <option value={category.title} key={category.id}>
                  {category.title}
                </option>
              );
            })}
          </select>
          <strong>Title:</strong>
          <input type="text" onChange={clear} name="title" />
        </fieldset>
      </form>
      <button name="btn" onClick={filter}>
        Clear
      </button>
    </div>
  );
};

export default Filter;

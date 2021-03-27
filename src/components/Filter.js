import React from "react";
import { useSelector } from "react-redux";

const selectUniqueColors = ({ products }) =>
  Array.from(new Set(products.data.map(({ color }) => color)));

const Filter = () => {
  const colors = useSelector(selectUniqueColors);
  const [minPrice, setMinPrice] = React.useState();
  const [maxPrice, setMaxPrice] = React.useState();
  const [selectedColors, setSelectedColors] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColors((colors) => [...colors, target.value]);
    } else {
      setSelectedColors((colors) =>
        colors.filter((color) => color !== target.value)
      );
    }
  }

  function handleCheched(color) {
    selectedColors.includes(color);
  }

  return (
    <div>
      <input
        type="number"
        value={minPrice}
        onChange={({ target }) => setMinPrice(target.value)}
        placeholder="min"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={({ target }) => setMaxPrice(target.value)}
        placeholder="max"
      />

      {colors.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            onChange={handleChange}
            checked={handleCheched(color)}
          />
          {color}
        </label>
      ))}
    </div>
  );
};

export default Filter;

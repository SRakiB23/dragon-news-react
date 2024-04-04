import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [catergories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">All Categories</h2>
      {catergories.map((category) => (
        <NavLink
          className="block ml-4 text-xl font-normal py-4"
          to={`/category/${category.id}`}
          key={category.id}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftSideNav;

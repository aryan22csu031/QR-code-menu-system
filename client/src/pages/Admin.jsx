import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [fullServingPrice, setFullServingPrice] = useState(0);
  const [halfServingPrice, setHalfServingPrice] = useState(0);
  const [description, setDescription] = useState("");
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const [menuItem, setMenuItem] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMenuItem({
      name: name,
      description: description,
      halfServingPrice: halfServingPrice,
      fullServingPrice: fullServingPrice,
      category: category,
    });

    try {
      await axios.post(`http://localhost:3000/menu/new`, menuItem);
      alert("Menu item added!");
    } catch (err) {
      alert("not added");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col p-4 items-center gap-[2rem]">
      <h1 className="text-4xl font-serif font-bold text-black">
        Admin Dashboard
      </h1>
      <h1 className="text-2xl font-serif font-semibold text-red-400">
        Add an Item
      </h1>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <div className="flex gap-2 justify-between items-center w-full">
            <h1 className="font-semibold">Item Name</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              className="p-1 rounded-lg"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex gap-[2rem] w-full items-start justify-start">
            <h1 className="font-semibold">Item Category</h1>
            <div className="flex flex-col gap-2 items-center justify-center w-1/2">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  value="breakfast"
                  checked={category === "breakfast"}
                  onChange={handleCategoryChange}
                />
                <h1>Breakfast</h1>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  value="lunch"
                  checked={category === "lunch"}
                  onChange={handleCategoryChange}
                />
                <h1>Lunch</h1>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  value="dinner"
                  checked={category === "dinner"}
                  onChange={handleCategoryChange}
                />
                <h1>Dinner</h1>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  value="drinks"
                  checked={category === "drinks"}
                  onChange={handleCategoryChange}
                />
                <h1>Drinks</h1>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  value="desserts"
                  checked={category === "desserts"}
                  onChange={handleCategoryChange}
                />
                <h1>Desserts</h1>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between gap-2">
            <h1 className="font-semibold">Description</h1>
            <textarea
              placeholder="Description"
              className="rounded-lg p-1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex w-full justify-between gap-2">
            <div className="flex flex-col">
              <h1 className="font-semibold">Half Serving Price</h1>
              <h2 className="text-[10px] relative top-[-4px]">
                *If applicable
              </h2>
            </div>
            <input
              type="number"
              placeholder="Half Serving Price"
              value={halfServingPrice}
              className="rounded-lg p-1"
              onChange={(e) => setHalfServingPrice(e.target.value)}
            />
          </div>
          <div className="flex w-full justify-between gap-2">
            <div className="flex flex-col">
              <h1 className="font-semibold">Full Serving Price</h1>
            </div>
            <input
              type="number"
              placeholder="Full Serving Price"
              value={fullServingPrice}
              className="rounded-lg p-1"
              onChange={(e) => setFullServingPrice(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-400 rounded-sm p-2 mt-4"
          >
            Add
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center p-2 bg-red-600 rounded-lg">
      <h1 className="text-blue"><Link to="/menu/all">View All Items</Link></h1>
      </div>
    </div>
  );
};

export default Admin;

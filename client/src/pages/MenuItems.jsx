import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MenuItems = () => {
  const [menu, setMenu] = useState([]);
  const fetchMenu = async () => {
    try {
      const res = await fetch("http://localhost:3000/menu");
      const data = await res.json();
      console.log(data.data);
      setMenu(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <>
      <div className="flex flex-col p-4 items-center gap-[2rem]">
        <h1 className="text-4xl font-serif font-bold text-black">
          Admin Dashboard
        </h1>
        <table className="table-auto w-full border-collapse border border-gray-200 rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                Item Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                Item Category
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                Item Description
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                Half Price
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                Full Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {menu.map((item) => {
              return (
                <>
                  <tr className="hover:bg-gray-100">
                    <td className="px-4 py-2 border border-gray-300">
                      {item.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.category}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {item.description}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      Rs. {item.halfServingPrice || 0}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      Rs. {item.fullServingPrice}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <h1 className="text-blue-600 hover:underline">
          <Link to="/">{"<< "}Back to Home</Link>
        </h1>
      </div>
    </>
  );
};

export default MenuItems;

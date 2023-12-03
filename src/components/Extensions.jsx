import React, { useState } from "react";
import { data } from "../data/data";

const Extensions = () => {
  const [foods, setFoods] = useState(data);

  //Filter Applying
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Selling Products
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col -lg:flex-row justify-between">
        {/* filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-start">
            <button
              onClick={() => setFoods(data)}
              className="bg-white text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              All
            </button>
            <button
              onClick={() => filterType("long")}
              className="bg-white text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Extended Wire
            </button>
            <button
              onClick={() => filterType("socket")}
              className="bg-white text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Multi Sockets
            </button>
            <button
              onClick={() => filterType("holder")}
              className="bg-white text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Holders
            </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="bg-white text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Min Price
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="bg-white text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Normal
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="bg-white text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Expensive
            </button>
          </div>
        </div>
      </div>

      {/* dispaly Extension */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-top-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold"> {item.name} </p>
              <p>
                <span className="bg-orange-600 rounded-full text-white p-1">
                  {" "}
                  {item.price}{" "}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extensions;

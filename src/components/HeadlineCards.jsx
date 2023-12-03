import React from "react";
import heroExtension from "../assets2/images/heroExtention.jpg";
import mulSocket1 from "../assets2/images/mulSocket1.jpg";
import holder1 from "../assets2/images/holder1.png";

const HeadlineCards = () => {
  return (
    <div className="container mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/80 rounded-xl text-white">
          <p className="font-bold text-2xl md:text-xl px-2 pt-4">
            Extended Wire Extension
          </p>
          <p className="px-2 text-orange-600 font-bold">Stock Available</p>
          <button className="border border-orange-600 bg-orange-600 hover:bg-white hover:text-black hover:border-white mx-2 absolute bottom-2">
            Order Now
          </button>
        </div>
        <img
          src={heroExtension}
          alt="Long Wire Extension"
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/80 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">8/6/4 Way Socket</p>
          <p className="px-2 text-orange-600 font-bold">Stock Available</p>
          <button className="border border-orange-600 bg-orange-600 hover:bg-white hover:text-black hover:border-white mx-2 absolute bottom-2">
            Order Now
          </button>
        </div>
        <img
          src={mulSocket1}
          alt="Long Wire Extension"
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/80 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Lamp/Bulb Holder</p>
          <p className="px-2 text-orange-600 font-bold">Stock Available</p>
          <button className="border border-orange-600 bg-orange-600 hover:bg-white hover:text-black hover:border-white mx-2 absolute bottom-2">
            Order Now
          </button>
        </div>
        <img
          src={holder1}
          alt="Long Wire Extension"
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;

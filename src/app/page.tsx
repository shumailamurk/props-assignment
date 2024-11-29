"use client";
import React from 'react';
import Propsy from './propsy';
import { useState } from 'react';

const page = () => {
  const [name, setName] = useState({
    name: "",
    favdish: "",
    favcolour: ""
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      {/* Passing data to Propsy component */}
      <Propsy favname={name.name} favdish={name.favdish} favcolour={name.favcolour} />
      
      <button
        className="bg-[#289ab1] text-white border-x-8 border-[#0f566e] border-y-4 px-6 py-3 rounded md:px-8 md:py-4 sm:px-4 sm:py-2"
        onClick={() => {
          setName({
            name: "Name: Shumaila",
            favdish: "Favourite Dish: Biryani",
            favcolour: "Favourite Colour: Black"
          });
        }}
      >
        Click here 😊
      </button>
    </div>
  );
};

export default page;

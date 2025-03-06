import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Smartphone,
  Monitor,
  Gamepad2,
  Headphones,
  Watch,
} from "lucide-react";
import Button from "../Button";

export const categoryList = [
  {
    id: 1,
    name: "Camera",
    icon: <Camera size={50} strokeWidth={1.5} color="gray" />,
  },
  {
    id: 2,
    name: "Cell Phone",
    icon: <Smartphone size={50} strokeWidth={1.5} color="gray" />,
  },
  {
    id: 3,
    name: "Computer",
    icon: <Monitor size={50} strokeWidth={1.5} color="gray" />,
  },
  {
    id: 4,
    name: "Game",
    icon: <Gamepad2 size={50} strokeWidth={1.5} color="gray" />,
  },
  {
    id: 5,
    name: "Headphone",
    icon: <Headphones size={50} strokeWidth={1.5} color="gray" />,
  },
  {
    id: 6,
    name: "Smart Watch",
    icon: <Watch size={50} strokeWidth={1.5} color="gray" />,
  },
];

const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategory = (index: number) => {
    setSelectedCategory((prev) => (prev === index ? null : index));
  };

  return (
    <section>
      {/* Title Section */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-red-600 w-[20px] h-[40px] rounded-sm"></div>
          <h1 className="text-lg font-semibold">Categories</h1>
        </div>

        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-3xl">Browse By Category</h1>
          <div className="flex gap-4 items-center">
            <Button
              className="bg-gray-300 rounded-full py-2 px-1"
              labelName=""
              icones={<ArrowLeft size={20} color="gray" />}
            />
            <Button
              className="bg-gray-300 rounded-full py-2 px-1"
              labelName=""
              icones={<ArrowRight size={20} color="gray" />}
            />
          </div>
        </div>

        {/* Category Grid */}
        <div className="pb-20">
          <div className="grid grid-cols-3 sm:grid-cols-6  xl:grid-cols-6 gap-4 xl:gap-8 ">
            {categoryList.map((list, index) => (
              <div
                key={index}
                onClick={() => handleCategory(index)}
                className={`border flex flex-col items-center justify-center rounded-md p-6 cursor-pointer transition-all duration-300 ${
                  selectedCategory === index
                    ? "bg-red-600 text-white border-red-600"
                    : "border-gray-400 hover:bg-gray-200"
                }`}
              >
                {/* Icon */}
                <div>
                  {React.cloneElement(list.icon, {
                    color: selectedCategory === index ? "white" : "gray",
                  })}
                </div>

                <p
                  className={`text-sm font-semibold mt-2 transition-all duration-300`}
                >
                  {list.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="py-10">
        <hr className="bg-gray-100" />
      </div>
    </section>
  );
};

export default Category;

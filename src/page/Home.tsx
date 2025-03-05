import React, { useState } from "react";
import { categories } from "../data/data";
import { ChevronDown } from "lucide-react";

const Home: React.FC = () => {
  const [dropDown, setDropDown] = useState<number | null>(null);

  const handelDropDown = (index: number) => {
    setDropDown((prev) => (prev === index ? null : index)); // Toggle between open/close
  };

  return (
    <section className="flex gap-6 mt-4 items-center">
      <div className="hidden md:block  w-[220px] h-[400px] lg:w-[250px]  overflow-y-auto">
        {categories?.map((category, index) => {
          return (
            <div key={index}>
              <h2
                className="text-gray-700 py-2"
                onClick={() => handelDropDown(index)}
              >
                <div className="flex justify-between w-[200px] items-center">
                  <span>{category?.title}</span>

                  {(category.title === "Women's Fashion" ||
                    category.title === "Men's Fashion") && (
                    <span>
                      <ChevronDown
                        size={15}
                        className={`${
                          dropDown === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </span>
                  )}
                </div>
              </h2>

              <ul className="pl-4">
                {category.subcategories.map((sub) => (
                  <li
                    key={sub.id}
                    id={sub.id}
                    className={`text-gray-700 hover:bg-gray-300 py-2 ${
                      dropDown === index ? "block" : "hidden"
                    }`}
                  >
                    <span className="">{sub.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex-1 flex">
        <div className="w-full h-[344px]">
          <img
            src="src/assets/Frame 560.png"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

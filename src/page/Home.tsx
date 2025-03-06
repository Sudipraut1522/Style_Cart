import React, { useState } from "react";
import { categories, service } from "../data/data";
import { ChevronDown } from "lucide-react";
import Today from "../component/ui/Today";
import Button from "../component/Button";
import Category from "../component/ui/Category";
import Monthly from "../component/ui/Monthly";
import ProductCard from "../component/ui/ProductCard";

const Home: React.FC = () => {
  const [dropDown, setDropDown] = useState<number | null>(null);

  const handelDropDown = (index: number) => {
    setDropDown((prev) => (prev === index ? null : index)); // Toggle between open/close
  };

  return (
    <>
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
      {/* Todays section */}
      <section className="pt-10 w-full py-10">
        <div className="flex flex-col gap-10 ">
          <Today />
          <div className="flex justify-center">
            <Button
              className="bg-red-600 text-white py-3 px-6 flex justify-center rounded-md hover:bg-red-700 duration-300 transition-all"
              labelName="View All Products"
              labelClassName="font-semibold text-lg"
            />
          </div>
        </div>
        <div className="py-10">
          <hr className="text-gray-300 h-[4px] " />
        </div>
      </section>
      {/*category Section */}
      <section>
        <Category />
      </section>
      {/*Monthly section */}
      <section className="py-10">
        <Monthly />

        <div className="py-20">
          <hr className="bg-gray-100" />
        </div>
      </section>
      <section className="bg-black flex flex-col-reverse md:flex-row items-center md:justify-between gap-6 px-6 lg:px-20 py-10 min-h-[500px]">
        {/* Left Content */}
        <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2 flex-wrap justify-center text-center md:text-left">
          <h1 className="text-green-500 font-semibold text-lg">Category</h1>
          <h1 className="text-white text-3xl text-center md:text-start md:text-4xl lg:text-5xl leading-tight font-bold max-w-[450px]">
            Enhance Your Music Experience
          </h1>

          {/* Timer Circles */}
          <div className="flex justify-center md:justify-start gap-3 lg:gap-5">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-full aspect-square w-14 md:w-16 flex justify-center items-center shadow-md"
              >
                <p className="text-center text-sm font-medium">23hrs</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div>
            <Button
              className="bg-[#00FF66] text-white px-8 py-3 text-lg rounded-sm shadow-md"
              labelName="Buy Now"
            />
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center rounded-full aspect-square  bg-gradient-to-b from-gray-700  to-gray-700">
          <div className="overflow-hidden  shadow-2xl flex items-center   aspect-square p-2">
            <img
              src="src/assets/Frame 694.png"
              alt="Music Experience"
              className="object-cover w-full"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4 pt-20">
        <div className="flex items-center gap-4">
          <div className="bg-red-600 w-[20px] h-[40px] text-red-600 rounded-sm">
            kjg
          </div>
          <h1>Monthly</h1>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex gap-4 lg:gap-40 items-center">
            <h1 className="font-bold text-3xl">Best Selling Products</h1>
          </div>
          <div className=" flex gap-4 items-center ">
            <Button
              className="bg-red-600 text-white  text-xl rounded-sm   py-3 px-8  "
              labelName="View All"
            />
          </div>
        </div>
        <div className=" ">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 overflow-hidden ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Button
            className="bg-red-600 text-white py-4 px-8 text-center rounded-md"
            labelName="View All Products"
          />
        </div>
      </section>
      <section className="flex flex-col gap-4 pt-20">
        <div className="flex items-center gap-4">
          <div className="bg-red-600 w-[20px] h-[40px] text-red-600 rounded-sm">
            kjg
          </div>
          <h1>Featured</h1>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex gap-4 lg:gap-40 items-center">
            <h1 className="font-bold text-3xl">New Arrival</h1>
          </div>
        </div>
        <div className=" ">
          <div className="grid grid-cols-2 gap-2 md:gap-6 overflow-hidden">
            <div className="bg-black flex  relative">
              <img
                className="object-contain w-full h-full"
                src="src/assets/ps5-slim-goedkope-playstation_large 1.png"
                alt="PS5"
              />
              <div className="absolute text-white bottom-10 pl-10 hidden md:block">
                <h1 className="font-semibold text-lg">PlayStation 5</h1>
                <p className=" ">
                  Black and White version of the PS5 coming out on sale.{" "}
                </p>
                <Button className=" underline " labelName="Shop Now" />
              </div>
            </div>
            <div className="grid gap-2 md:gap-4">
              <div className="bg-black flex  relative">
                <img
                  className="object-contain w-full h-full"
                  src="src/assets/attractive-woman-wearing-hat-posing-black-background 1 (1).png"
                  alt="PS5"
                />
                <div className="absolute text-white bottom-10 pl-10 hidden md:block">
                  <h1 className="font-semibold text-lg">Women’s Collections</h1>
                  <p className=" ">
                    Featured woman collections that give you another vibe.
                  </p>
                  <Button className=" underline " labelName="Shop Now" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="bg-black flex relative">
                  <img
                    className="object-contain w-full h-full"
                    src="src/assets/Frame 706.png"
                    alt="PS5"
                  />
                  <div className="absolute text-white bottom-10 pl-10 hidden md:block">
                    <h1 className="font-semibold text-lg">Speakers</h1>
                    <p className=" ">Amazon wireless speakers </p>
                    <Button className=" underline " labelName="Shop Now" />
                  </div>
                </div>
                <div className="bg-black flex relative">
                  <img
                    className="object-contain w-full h-full"
                    src="src/assets/Frame 707.png"
                    alt="PS5"
                  />
                  <div className="absolute text-white bottom-10 pl-10 hidden md:block">
                    <h1 className="font-semibold text-lg">Perfume </h1>
                    <p className=" ">GUCCI INTENSE OUD EDP </p>
                    <Button className=" underline " labelName="Shop Now" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex justify-center gap-4 lg:gap-10 py-20">
        {service?.map((data, index) => (
          <div key={index} className="flex flex-col  gap-3 w-[249px]">
            <div className="w-full flex md:justify-center md:items-center drop-shadow-lg ">
              <div className="rounded-full  p-2 bg-gray-200 ">
                <div className="border h-12 w-12 rounded-full flex text-white items-center justify-center bg-black hover:scale-105 duration-200  transition-all">
                  {data?.icon}
                </div>
              </div>
            </div>
            {/* Title */}
            <p className="text-sm lg:text-lg">{data?.title}</p>
            {/* Description */}
            <p className="text-sm text-gray-600">{data?.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;

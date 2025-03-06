import React from "react";
import ProductCard from "./ProductCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "../Button";

const Monthly: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Monthly;

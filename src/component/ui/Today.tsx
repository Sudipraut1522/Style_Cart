import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "../Button";
import ProductCard from "./ProductCard";

const Today: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="bg-red-600 w-[20px] h-[40px] text-red-600 rounded-sm">
          kjg
        </div>
        <h1>Today’s</h1>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex gap-4 lg:gap-40 items-center">
          <h1 className="font-bold text-3xl">Flash Sales</h1>
          <div className="hidden gap-4 lg:gap-10 md:flex">
            <div>
              Days
              <p className="font-bold text-2xl">03</p>
            </div>

            <div>
              Hours
              <p className="font-bold text-2xl">20</p>
            </div>
            <div>
              Min
              <p className="font-bold text-2xl">20</p>
            </div>
            <div>
              sec
              <p className="font-bold text-2xl">10</p>
            </div>
          </div>
        </div>
        <div className=" flex gap-4 items-center ">
          <Button
            className="bg-gray-300 rounded-full py-2 px-1  "
            labelName=""
            icones={
              <ArrowLeft size={20} className="text-gray-600 text-center" />
            }
          />
          <Button
            className="bg-gray-300 text-center flex justify-center items-center rounded-full py-2 px-1  "
            labelName=""
            icones={
              <ArrowRight size={20} className="text-gray-600 text-center" />
            }
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

export default Today;

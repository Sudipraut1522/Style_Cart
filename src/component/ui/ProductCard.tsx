import React from "react";

const ProductCard: React.FC = () => {
  return (
    <section className="flex flex-col gap-2 py-4 hover:drop-shadow-lg shadow-gray-50 hover:scale-100 hoverduration-200 transition-all ">
      <div className="bg-gray-100 p-6">
        <div className="w-full flex justify-center hover:transition-all  hover:scale-105 hover:duration-150 ease-in">
          <img
            src="src/assets/g92-2-500x500 1.png"
            alt=""
            className="object-cover "
          />
        </div>
      </div>
      <div>
        <p>HAVIT HV-G92 Gamepad</p>
        <p>$120</p>
        <img src="src/assets/Frame 566.png" alt="" />
      </div>
    </section>
  );
};

export default ProductCard;

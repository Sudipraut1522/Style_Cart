import React from "react";
import InputField from "../InputField";

const Footer: React.FC = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="px-8 grid sm:grid-cols-3 lg:grid-cols-5  gap-4 lg:px-[10%]">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg ">Exclusive</h1>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="max-w-[250px]">
            <InputField labelName="" placeholder="Enter ypur Email" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <h1 className="font-semibold text-lg ">Support</h1>
          <p className="max-w-[200px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <h1 className="font-semibold text-lg ">Support</h1>
          <p className="max-w-[200px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <h1 className="font-semibold text-lg ">Support</h1>
          <p className="max-w-[200px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <h1 className="font-semibold text-lg ">Support</h1>
          <p className="max-w-[200px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

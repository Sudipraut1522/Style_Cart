import React from "react";
import sidemenu from "../assets/sidemenu.png";
import InputField from "../component/InputField";
import Button from "../component/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginType } from "../schema/RegisterSchema";

const Login = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginType) => {
    console.log(data);
    reset();
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex bg-white rounded-lg shadow-xl overflow-hidden w-[1305px]">
        <div>
          <img
            src={sidemenu}
            alt=""
            className="w-[650px] h-[600px] rounded-tr-[4px] rounded-br-[4px] object-cover"
          />
        </div>
        <div className="p-10 flex flex-col justify-center w-[371px] h-[400px] ">
          <h2 className="text-2xl font-semibold text-center">
            Login in to Exclusive
          </h2>
          <p className="text-sm text-gray-600 text-center">
            Enter your details Below
          </p>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* yo hera ani arko aafai gara  css ma nai garxu ni twa logaraok oktokmokeokookgic  */}
            <InputField
              inputClassName="border-b-1 border-gray-600 "
              error={errors?.email}
              register={register}
              name="email"
              placeholder="Enter your Email"
              labelName="Email"
            />
            <InputField
              inputClassName="border-none px-4 py-4 "
              register={register}
              error={errors?.password}
              name="password"
              placeholder="Enter your password"
              labelName="Password"
              type="password"
            />

            <div className="flex gap-7">
              <Button
                labelName="Login"
                className="bg-red-500 text-white rounded-md py-3 px-8"
              />
              <Button labelName="Forget Password" className="text-red-500" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

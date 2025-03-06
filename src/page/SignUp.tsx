import React from "react";
import InputField from "../component/InputField";
import Button from "../component/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormData, registerSchema } from "../schema/RegisterSchema";
import { CgPassword } from "react-icons/cg";

const SignUp: React.FC = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    const { cpassword, ...submitteddata } = data;
  };

  return (
    <div className="grid md:grid-cols-2  gap-20 py-20">
      <div className="bg-[#CBE4E8]">
        <div className="flex w-full h-full justify-center items-center">
          <img
            src="src/assets/dl.beatsnoop 1.png"
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-between  ">
        <div>
          <h1 className="font font-semibold text-[32px]">Crate an Account</h1>
          <p>Enter Yours Details</p>
        </div>

        <form
          action=""
          className="flex flex-col gap-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            name="username"
            labelName="User Name:"
            placeholder="Enter Your Name.."
            register={register}
            error={errors?.username}
            errorClassName="text-red-600"
          />
          <InputField
            error={errors?.email}
            name="email"
            labelName=" Email"
            placeholder="Enter Your Email...."
            register={register}
          />
          <InputField
            error={errors?.password}
            name="password"
            type="password"
            labelName="Password"
            placeholder="Enter Your Password.."
            register={register}
          />
          <InputField
            error={errors?.cpassword}
            name="cpassword"
            type="password"
            labelName="Cpassword"
            placeholder="Conform Your Password.."
            register={register}
          />
          <div className="flex justify-end flex-col pt-6 gap-6">
            <div className="flex justify-center">
              <Button
                className="bg-red-600 text-white text-center py-3 px-8 rounded-md"
                labelName="Crate an Account"
              />
            </div>
            <div className="flex justify-center">
              <p>Already have an Account? Login</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

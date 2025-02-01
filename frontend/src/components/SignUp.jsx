import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";
import { RiLoader2Line } from "react-icons/ri";
import CustomCard from "./CustomCard";

const SignUp = () => {
  const { signUp, loading } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const formValues = {
      firstName: form.get("firstName"),
      lastName: form.get("lastName"),
      email: form.get("email"),
      password: form.get("password"),
      role: form.get("role"),
    };

    await signUp(formValues);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <CustomCard className="px-4 py-2 shadow-md rounded-lg sm:w-1/3 w-full ">
        <h4 className="text-center font-clash-bold border-b pb-2 ">Sign Up</h4>
        <form onSubmit={handleSubmit} className="flex flex-col mt-5">
          <div className="flex  items-center gap-5 ">
            <input
              name="firstName"
              type="text "
              placeholder="First Name"
              className="input-style"
            />
            <input
              name="lastName"
              type="text "
              placeholder="Last Name"
              className="input-style"
            />
          </div>

          <input
            name="email"
            type="email "
            placeholder="example@gmail.com"
            className="input-style mt-5"
          />
          <input
            name="password"
            type="password"
            placeholder="********"
            className="input-style mt-5"
          />
          <select
            name="role"
            className="input-style mt-5 w-[200px] font-clash-regular   "
          >
            <option className="text-slate-700" value="">
              who are you
            </option>
            <option value={"user"} className="text-slate-700">
              User
            </option>
            <option value={"admin"} className="text-slate-700">
              Admin
            </option>
          </select>

          <div className="mt-6 flex items-center justify-between">
            <Button
              disabled={loading}
              type={"submit"}
              lable={
                loading ? (
                  <RiLoader2Line className="animate-spin text-[18px] " />
                ) : (
                  "SignUp"
                )
              }
              containerClass={
                "bg-dark text-white hover:bg-yellow hover:text-dark  rounded-full u tracking-[1px] font-clash-light "
              }
            />
            <small>
              <p>
                I already have an account?{" "}
                <Link
                  to={"/signin"}
                  className="underline hover:text-blue-500 cursor-pointer "
                >
                  click here
                </Link>{" "}
              </p>
            </small>
          </div>
        </form>
      </CustomCard>
    </div>
  );
};

export default SignUp;

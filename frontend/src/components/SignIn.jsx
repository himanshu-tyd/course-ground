import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import useSignIn from "../hooks/useSignIn";
import { RiLoader2Line } from "react-icons/ri";
import CustomCard from "./CustomCard";

const SignIn = () => {
  const { signIn, loadig } = useSignIn();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const formValue = {
      email: form.get("email"),
      password: form.get("password"),
      role: form.get("role"),
    };

    await signIn(formValue);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <CustomCard>
        <h4 className="text-center font-clash-bold border-b pb-2 ">Sign In</h4>
        <form onSubmit={handleSubmit} className="flex flex-col mt-5">
          <input
            name="email"
            type="email "
            placeholder="example@gmail.com"
            className="input-style "
          />
          <input
            name="password"
            type="password"
            placeholder="********"
            className="input-style mt-5"
          />
          <select
            name="role"
            id="role"
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
              disabled={loadig}
              type={"submit"}
              lable={
                loadig ? (
                  <RiLoader2Line className="animate-spin text-[18px]" />
                ) : (
                  "Sign In"
                )
              }
              containerClass={
                "bg-dark text-white hover:bg-yellow hover:text-dark  rounded-full u tracking-[1px] font-clash-light "
              }
            />
            <small>
              <p>
                {`I don't have an account `}
                <Link
                  to={"/signup"}
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

export default SignIn;

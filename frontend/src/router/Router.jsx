import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../components/SignUp";
import Hero from "../sections/Hero";
import SignIn from "../components/SignIn";
import { getContextData } from "../context/AuthContexProvider";
import { Navigate } from "react-router-dom";
import DashBoard from "../sections/DashBoard";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import PurchaseConfirmation from "../components/PurchaseConfirmation";

const Router = () => {
  const { user } = getContextData();

  const checkRoute = <Navigate to={"/dashboard"} replace={true} />;

  return (
    <>
      <Routes>
        <Route exact path="/" element={user ? checkRoute : <Hero />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard/*" element={<DashBoard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/purchase-confirm" element={<PurchaseConfirmation />} />          
        </Route>
      </Routes>
    </>
  );
};

export default Router;

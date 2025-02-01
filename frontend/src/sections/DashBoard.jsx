import { Route, Routes } from "react-router-dom";
import LeftPanel from "../components/LeftPanel";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Purchase from "../pages/Purchase";
import Settings from "../pages/Settings";
import CourseDetails from "../components/CourseDetails";
import AdminDashboard from "../pages/AdminDashboard";
import PurchaseConfirmation from "../components/PurchaseConfirmation";

const DashBoard = () => {
  return (
    <div className="w-full flex  h-full">
      <LeftPanel />
      <Routes>
        <Route path={`/`} element={<AdminDashboard />} />
        <Route path={`home`} element={<Home />} />
        <Route path={`courses/:_id`} element={<CourseDetails />} />
        <Route path="courses/:_id/purchase-confirm" element={<PurchaseConfirmation />} />      
        <Route path={`courses`} element={<Courses />} />
        <Route path={`purchase`} element={<Purchase />} />
        <Route path={`settings`} element={<Settings />} />
      </Routes>
    </div>
  );
};

export default DashBoard;

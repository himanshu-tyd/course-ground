import React, { useState } from "react";
import { useFechCourses } from "../hooks/useFetchCourse";
import { Link, useLocation } from "react-router-dom";
import Error from "./Error";
import Loader from "./Loader";
import {
  ChevronLeft,
  Clock,
  DollarSign,
  GraduationCap,
  Loader2,
} from "lucide-react";
import Button from "./Button";
import usePurchase from "../hooks/usePurchase";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { getContextData } from "../context/AuthContexProvider";

const CourseDetails = () => {
  const location = useLocation();
  const [checkTime, setcheckTime] = useState(true);
  const { loading: purchaseLoader, purchaseCourse } = usePurchase();
  const { role } = getContextData();
  const id = location.pathname.split("/")[3];
  const navigate = useNavigate();

  const {
    data: courseData,
    error,
    loading,
  } = useFechCourses(`/api/course/${id}`);

  if (error) {
    return <Error error={error} />;
  }

  let data;

  const handlePruchase = async () => {
    if (role === "admin") {
      return toast.error("You are admin you can not pruchase course.");
    }

    if (checkTime) {
      setcheckTime(false);
      data = await purchaseCourse(courseData?._id);
    } else {
      toast.warning("Please wait for 3 seconds before purchasing again");
    }

    setTimeout(() => {
      setcheckTime(true);
    }, 3000);

    if (!data) return;

    navigate(`/dashboard/courses/${data?.creatorId}/purchase-confirm`);
  };

  return (
    <div className="w-full flex flex-col ">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col w-full">
          {/* title */}
          <header className="w-full flex-col gap-2 h-[140px] bg-slate-950 flex justify-center px-10 ">
            <button
              onClick={() => window.history.back()}
              className="text-slate-500 flex items-center gap-2 group hover:text-slate-400 transition-all "
            >
              {" "}
              <ChevronLeft className=" w-5 h-5  inline-block font-clash-regular group-hover:-translate-x-1 duration-150 " />{" "}
              Back to Courses
            </button>
            <h3 className="text-white text-xl  md:text-2xl font-clash-semibold  ">
              {courseData?.title}
            </h3>
          </header>

          {/* about couser */}

          <div className="flex-col-reverse lg:flex-row flex  justify-between p-2 md:p-8  ">
            <div className="px-5 py-3">
              <span className="font-clash-bold text-xl  ">
                About This Course
              </span>
              <p className="font-clash-light  text-[14px] text-gray  ">
                {courseData?.desc}
              </p>

              <div className="flex flex-col mt-5 gap-2">
                <span className="font-clash-semibold font-xl">
                  You Instructor
                </span>
                <div className="flex gap-4 w-full ">
                  <img
                    src="https://yt3.googleusercontent.com/C25u3DcSguL-wd3GaO110Q1fyO5ClTraTjtF72kJhZtpQwuAv3zLmb7K-ZLJecQQJBVvP1McmA=s900-c-k-c0x00ffffff-no-rj"
                    height={50}
                    width={50}
                  />
                  <div className="flex flex-col font-clash-regular">
                    <span className=" ">Harkirat</span>
                    <p className="text-slate-700 ">Senior Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* image price  */}

            <div className="flex flex-col gap-5 font-clash-regular lg:w-[340px]   ">
              <div className="lg:w-[340px] w-full">
                <img
                  src={courseData?.imageUrl}
                  className="rounded-md w-full "
                />
              </div>
              <div className="w-full border border-slate-400 px-8 py-3 rounded-md  ">
                <h3 className="font-clash-semibold text-2xl  ">
                  {" "}
                  &#8377; {courseData?.price}
                </h3>
                <p className="text-[12px] text-gray ">
                  One-time purchase, lifetime access
                </p>
                <ul className="space-y-2 text-sm mt-5">
                  <li className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>1 Year</span>
                  </li>
                  <li className="flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Advance</span>
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>30-day money-back guarantee</span>
                  </li>
                </ul>

                <div className="mt-5 w-full">
                  <Button
                    disabled={loading}
                    handleClick={handlePruchase}
                    lable={
                      purchaseLoader ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        "Purchase Now "
                      )
                    }
                    containerClass={`text-white rounded-full w-full ${
                      role === "admin" || loading ? "bg-slate-700" : "bg-black"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;

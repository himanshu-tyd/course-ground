import React, { useState } from "react";
// import { course } from '../constants/data'
import WrapperContainer from "../components/WrapperContainer";
import { CourseCard } from "../components/CourseCard";
import { useFetchPurchase } from "../hooks/useFechPurchase";
import Error from "../components/Error";
import Loader from "../components/Loader";

const Purchase = () => {
  const {
    loading,
    error,
    data: course,
  } = useFetchPurchase("/api/users/mycourse");


  if (error) {
   return <Error error={error} />;
  }

  return (
    <WrapperContainer
      containerClass={
        "flex items-start justify-center w-full h-full overflow-x-hidden"
      }
    >{

      loading ? <Loader/> : 

      <div className="flex flex-wrap gap-5 justify-center md:justify-start ">
        {course?.data.courseInfo?.map((items, i) => (
          <CourseCard key={i} {...items} />
        ))}
      </div>

    }
    </WrapperContainer>
  );
};

export default Purchase;

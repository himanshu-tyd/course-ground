import WrapperContainer from "../components/WrapperContainer";
import { CourseCard } from "../components/CourseCard";
import Loader from "../components/Loader";
import { useFechCourses } from "../hooks/useFetchCourse";
import Error from "../components/Error";

const Courses = () => {
  const { data: courses, error, loading } = useFechCourses("/api/course");
  if (error)
    <WrapperContainer>
      <Error error={error} />
    </WrapperContainer>;

  return (
      <WrapperContainer
        containerClass={
          " flex items-start justify-center w-full h-full overflow-x-hidden  "
        }
      >
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-wrap gap-5 justify-center md:justify-start ">
            {courses?.length >= 0 ? (
              courses?.map((items) => (
                <CourseCard key={items?._id} {...items} />
              ))
            ) : (
              <p className="text-slate-700 h-dvh flex-center w-full self-center ">
                There are no course listed yet!
              </p>
            )}
          </div>
        )}
      </WrapperContainer>
  );
};

export default Courses;

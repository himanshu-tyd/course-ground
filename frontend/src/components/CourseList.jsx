import { Ellipsis, Loader2Icon } from "lucide-react";
import { useFetch } from "../hooks/useFetchData";
import useStore from "../zustand/useStore";

const CourseList = () => {
  const { adminCoures, setAdminCourse } = useStore();
  const {data:adminCourseList, error, loading } = useFetch("/api/admin/courses", setAdminCourse , adminCoures);

  console.log(adminCoures.length)

  if (error) {
    return (
      <div className="flex-center h-full  ">
        <span className="text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 text-gray font-clash-regular border-2 py-2 px-4 md:py-4 md:px-2 rounded-md overflow-hidden ">
      <div className="flex items-center justify-between p-2 w-full border-b   ">
        <div className="max-width">
          <p>Title</p>
        </div>

        <div className="max-width">
          <p>Description</p>
        </div>
        <div className="max-width">
          <p>Price</p>
        </div>

        <div className="max-width">
          <p>Action</p>
        </div>
      </div>

      <div className="flex flex-col overflow-y-auto  max-h-[448px]   ">
        {!loading ? (
          adminCourseList.length > 0 ? (
            adminCourseList?.map((items) => (
              <div
                key={items?._id}
                className="flex justify-between space-y-2   items-center text-slate-900 text-[12px] "
              >
                <div className="max-width  ">
                  <p className="capitalize max-width font-clash-semibold ">
                    {items.title.substring(0,20)}...
                  </p>
                </div>
                <div className="max-width  ">
                  <p className="">{items.desc.substring(0,30)}...</p>
                </div>
                <div className="max-width  ">
                  <p>&#8377; {items.price}</p>
                </div>

                <div className="max-width text-center  p-1   ">
                  <Ellipsis className="text-black hover:text-red-700 rounded-md  hover:bg-slate-200 cursor-pointer  " />
                </div>
              </div>
            ))
          ) : (
            <div className="flex-center">
              You have not created any course yet!
            </div>
          )
        ) : (
          <Loader2Icon className="self-center animate-spin " />
        )}
      </div>
    </div>
  );
};
export default CourseList;

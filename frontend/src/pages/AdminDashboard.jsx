import AddCourseDialog from "../components/AddCourseDialog ";
import CourseList from "../components/CourseList";
import DashboardHeader from "../components/DashboardHeader";
import { getContextData } from "../context/AuthContexProvider";
import Purchase from "./Purchase";

export default function AdminDashboard() {
  const { role } = getContextData();

  return (
    <div className="flex min-h-screen flex-col gap-8 p-6 md:p-8 w-full">
      <DashboardHeader />
      <main className="flex flex-col gap-4">
        {role === "admin" ? (
          <>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
              <AddCourseDialog />
            </div>
            <CourseList />
          </>
        ) : (
          <div className="flex overflow-y-hidden h-dvh w-full  md:h-[584px] flex-col  ">
            <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
            <Purchase/>
          </div>
        )}
      </main>
    </div>
  );
}

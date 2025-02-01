import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { getContextData } from "../context/AuthContexProvider";
import { toast } from "sonner";

const Header = () => {
  const { user, setUser } = getContextData();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    toast.success("Logout successfuly");
  };

  return (
    <header className="w-full flex-center  items-center text-dusty font-clash">
      <nav className=" w-full  flex justify-between items-center py-4 px-8 ">
        <div className="flex items-center gap-2 ">
          <span className=" border-yellow border-[4px] px-1 py-1 rounded-full " />
          <a  href="/" className="font-clash font-bold text-dark text-xl ">
            CourseGround
          </a>
        </div>

        <div className="hidden md:flex items-center gap-20 ">
          <a href="#">Courses</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {user ? (
          <div onClick={handleLogout}>
            <Button
              lable={"Logout"}
              containerClass={
                "border border-gray  rounded-full hover:bg-dark hover:text-white"
              }
            />
          </div>
        ) : (
          <Link to="/signin">
            <Button
              lable={"Sing Up"}
              icon={<HiArrowRight />}
              containerClass={
                "border border-gray  rounded-full hover:bg-dark hover:text-white"
              }
            />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

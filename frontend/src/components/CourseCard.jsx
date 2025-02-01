import { FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const CourseCard = ({
  _id,
  title,
  desc,
  imageUrl,
  price,
}) => {
  const random = Math.floor(Math.random() * 3) + 1;
  const path = useLocation();

  const pathname = path.pathname;  

  return (
    <div className="p-4 flex flex-col gap-2 border-2 border-dusty rounded-2xl    sm:max-w-[300px] md:max-w-[398px]  border-b-4 border-r-4    ">
  

      <img
        src={imageUrl}
        alt={title}
        width={100}
        height={100}
        className="w-[400px] h-[218px] object-cover rounded-2xl border-dusty border-2 "
      />
     
      <h5 className="text-sm font-clash-regular  ">{title}</h5>
      <p className="text-gray text-sm  ">{desc.substring(0, 60)}...</p>
      <div className="flex items-center  gap-2 w-full">
        <span className="font-clash-semibold">{price}</span>
        <span className="font-clash-regular  text-gray text-sm line-through ">
          {price * random}
        </span>
        <p className="ml-auto text-green-600 font-clash-bold backdrop-blur-lg ">
          {Math.floor((price / (price * random)) * 100)
            .toString()
            .slice(0, 2)}
          % OFF
        </p>
      </div>
      <div className="flex gap-1 mt-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <p key={i}>
            <FaStar className="text-yellow" />
          </p>
        ))}
      </div>
      {pathname == "/dashboard/courses" && (
        <div className="w-full flex-center mt-2 relative group  ">
          <Link
            to={`${_id}`}
            className="cursor-pointe bg-white hover:bg-yellow w-full text-center font-clash-semibold rounded-full py-3 border z-20 duration-150 "
          >
            View Details
          </Link>
          <span className="w-full h-full bg-black rounded-full absolute top-0 group-hover:translate-x-2 group-hover:translate-y-2  duration-150  "></span>
        </div>
      )}
    </div>
  );
};

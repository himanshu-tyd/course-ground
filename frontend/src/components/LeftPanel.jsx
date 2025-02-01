import React, { useState } from "react";
import { BookDown, House, Menu, Presentation, Settings, X } from "lucide-react";
import { Link } from "react-router-dom";

const LeftPanel = () => {
  const [active, setActive] = useState(true);

  return (
    <React.Fragment>
      <div className="min-w-[248px] h-dvh bg-slate-100  rounded-md hidden sm:block  ">
        <div className="px-6 py-10">
          <h3 className="uppercase font-clash-semibold text-sm text-gray">
            main menu
          </h3>
        </div>
        <div className="mt-5 flex flex-col gap-5  ">
          {Links.map((item) => (
            <Link
              to={`/dashboard/${item.href}`}
              key={item.title}
              className="flex items-center w-full gap-3 hover:bg-yellow duration-500 px-6 py-4 hover:shadow-md rounded-lg hover:scale-105  "
            >
              <span className="text-dusty font-light text-[14px]">
                {item.icon}
              </span>
              <h4 className="text-gray">{item.title}</h4>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`min-w-[180px] h-dvh  rounded-md block sm:hidden absolute z-30 duration-200 ${
          active ? "-translate-x-32  " : "translate-x-0 bg-slate-200"
        } `}
      >
        <div className="px-4 py-8 flex items-center w-full ">
          <h3 className="uppercase font-clash-semibold text-sm text-gray">
            main menu
          </h3>
          <div
            className={`ml-auto ${active && "bg-yellow p-2 rounded-md"} `}
            onClick={() => setActive(!active)}
          >
            {active ? <Menu /> : <X />}
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-5  ">
          {Links.map((item) => (
            <Link
              to={`/dashboard/${item.href}`}
              key={item.title}
              className="flex items-center w-full gap-3 duration-500 px-6 py-4  rounded-lg hover:scale-105  "
              onClick={() => setActive(true)}
            >
              <span className="text-dusty font-light text-[14px]">
                {item.icon}
              </span>
              <h4 className="text-gray">{item.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftPanel;

const Links = [
  {
    title: "Home",
    icon: <House />,
    href: "home",
  },
  {
    title: "Course",
    icon: <Presentation />,
    href: "courses",
  },
  {
    title: "Purchase",
    icon: <BookDown />,
    href: "purchase",
  },
  {
    title: "Settings",
    icon: <Settings />,
    href: "settings",
  },
];

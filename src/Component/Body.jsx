import { useState } from "react";
import Header from "./Header";
import RightSidebar from "./RightSidebar";
import SideBar from "./SideBar";

const Body = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div
        className={`body ${
          darkMode ? `bg-[#092635] ` : `bg-white text-black`
        }  overflow-scroll  w-[80%] shadow-lg rounded-lg h-[90vh]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
      >
        <div className="header">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <div className="flex h-full  ">
          <SideBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <RightSidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </>
  );
};

export default Body;

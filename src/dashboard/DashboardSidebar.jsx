import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const sidebarMenuColor = {
  backgroundColor: "#6B8E4E",
  color: "white",
};

function DashboardSidebar({ studentMenus, setMenuActive }) {
  const [hidden, setHidden] = useState(false);

  return (
    <div
      style={
        hidden
          ? { width: "110px", transition: "all 0.4s" }
          : { width: "320px", transition: "all 0.4s" }
      }
      className=" bg-white flex flex-col h-screen"
    >
      {/* top section -------------->  */}
      <div className="flex pl-5 pr-8 py-5 justify-between ">
        <Link to="/vidyarthi-app">
          <img
            src="assets/Vidyarthi_Logo.png"
            alt="logo"
            className="h-10"
            style={hidden ? { display: "none" } : { display: "block" }}
          />
        </Link>
        {hidden ? (
          <FaTimes
            className="text-3xl self-center cursor-pointer text-gray-500"
            onClick={() => setHidden(!hidden)}
          />
        ) : (
          <HiOutlineMenu
            className="text-3xl self-center cursor-pointer text-gray-500"
            onClick={() => setHidden(!hidden)}
          />
        )}
      </div>

      {/* main section -------------------->  */}
      {/* ----------------------->  */}
      <ul className="pt-5 pl-5 pr-8">
        {studentMenus.map((menu, id) => (
          <li
            key={id}
            style={
              menu.active ? sidebarMenuColor : { backgroundColor: "white" }
            }
            className="flex items-center text-gray-400 pt-4 pl-4 pb-4 gap-4 rounded-lg cursor-pointer"
            onClick={() => setMenuActive(id)}
          >
            <span className="text-2xl">{menu.icon}</span>{" "}
            {hidden ? "" : menu.title}
          </li>
        ))}
      </ul>

      {/* footer section ----------------> */}
      <div className="flex pl-5 pt-5 pb-5 items-center  gap-4 text-gray-400 ml-5 mr-8 mb-2 mt-auto border-t border-gray-300">
        <FiLogOut className="text-xl cursor-pointer" />
        <a href="/">{hidden ? "" : "Logout"}</a>
      </div>
    </div>
  );
}

export default DashboardSidebar;

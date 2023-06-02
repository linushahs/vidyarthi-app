import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { RiAppsFill, RiSettings4Fill } from "react-icons/ri";
import { GiOpenBook } from "react-icons/gi";
import { FiShoppingCart, FiHeart, FiAward } from "react-icons/fi";

function StudentDashboard() {
  //state values
  const [studentMenus, setStudentMenus] = useState([
    {
      icon: <RiAppsFill />,
      title: "Dashboard",
      active: true,
    },
    {
      icon: <GiOpenBook />,
      title: "My Courses",
      active: false,
    },
    {
      icon: <FiShoppingCart />,
      title: "My Cart",
      active: false,
    },
    {
      icon: <FiHeart />,
      title: "My Wishlist",
      active: false,
    },
    {
      icon: <FiAward />,
      title: "Achievements",
      active: false,
    },
    {
      icon: <RiSettings4Fill />,
      title: "Settings",
      active: false,
    },
  ]);

  const setMenuActive = (id) => {
    const updatedStudentMenus = [...studentMenus];
    updatedStudentMenus.forEach((e, eId) => {
      e.active = eId === id ? true : false;
    });
    setStudentMenus([...updatedStudentMenus]);
  };

  return (
    <div className="flex bg-sec h-screen gap-[1px]">
      <DashboardSidebar
        studentMenus={studentMenus}
        setMenuActive={setMenuActive}
      />
      <DashboardHeader />
    </div>
  );
}

export default StudentDashboard;

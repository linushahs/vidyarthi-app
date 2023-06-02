import { IoMdNotifications } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

function DashboardHeader() {
  return (
    <div className="flex-1 bg-white h-[84px]">
      <div className="flex justify-between pl-5 pr-8 pt-4 items-center">
        {/* Left side ------------------>  */}
        <div className="w-1/3">
          {/* search button  */}
          <label className="relative block grow">
            <span className="absolute inset-y-0 left-1 top-0 flex items-center pl-2 text-[#4CBC9A]">
              <BiSearch className="text-xl" />
            </span>
            <input
              className="placeholder:text-gray-400 block bg-gray-50 w-full rounded-lg py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search your courses"
              type="text"
              name="search"
            />
          </label>
        </div>

        {/* right side --------------------->  */}
        <div className="flex items-center gap-3">
          <button className="flex gap-1 cursor-pointer">
            <IoMdNotifications className="text-2xl text-gray-500" />
            <RiArrowDropDownLine className=" text-2xl text-gray-500" />
          </button>
          <span className="text-sm font-medium">Jane Cooper</span>
          <img
            src="assets/avatar.png"
            alt="avatar"
            className="cursor-pointer w-12 h-12 bg-fill bg-center"
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;

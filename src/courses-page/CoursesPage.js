import Header from "../landing-page-components/Header";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import SelectCategory from "./SelectCategory";

function CoursesPage() {
  return (
    <div className="pb-24">
      <Header />

      {/* Search (All types of selection) section  */}
      <div className="py-12 bg-sec px-24 flex gap-4 justify-between">
        {/* search button  */}
        <label className="relative block grow">
          <span className="text-sm text-gray-500">Search:</span>
          <span className="absolute inset-y-0 left-1 top-6 flex items-center pl-2 text-[#4CBC9A]">
            <BiSearch className="text-xl" />
          </span>
          <input
            className="placeholder:text-slate-400 block bg-white w-full rounded py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search your courses"
            type="text"
            name="search"
          />
        </label>

        {/* sort by button --------------->  */}
        <label className="flex-1">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select
            className="form-select appearance-none block w-full px-4 py-3 text-sm text-gray-700 bg-white bg-clip-padding bg-no-repeatborder border-solid border-gray-300 rounded
                transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>Latest</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </label>

        {/* instructor button --------------->  */}
        <label className="flex-1">
          <span className="text-sm text-gray-500 mb-2">Instructor:</span>
          <select
            className="form-select appearance-none block w-full px-4 py-3 text-sm  text-gray-700 bg-white bg-clip-padding bg-no-repeatborder border-solid border-gray-300 rounded
                transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>By Instructor</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </label>

        {/* category button --------------->  */}
        <label className="flex-1">
          <span className="text-sm text-gray-500 mb-1">Category:</span>
          <select
            className="form-select appearance-none block w-full px-4 py-3 text-sm  text-gray-700 bg-white bg-clip-padding bg-no-repeatborder border-solid border-gray-300 rounded
                transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>All Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </label>

        {/* rating button --------------->  */}
        <label className="flex-1">
          <span className="text-sm text-gray-500">Rating:</span>
          <select
            className="form-select appearance-none block w-full px-4 py-3 text-sm  text-gray-700 bg-white bg-clip-padding bg-no-repeatborder border-solid border-gray-300 rounded
                transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option selected>4 Star & Up</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </label>
      </div>

      {/* Main content of the courses page ------------------->  */}
      {/* ------------------------------------>  */}
      <div className="flex px-24 bg-sec pb-24 gap-5">
        {/* select category / course level / price / course period / rating */}
        {/* ------------------------------------------->  */}
        <div className="rounded-md w-80 bg-white p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Category</h3>
            <RiArrowDropDownLine className="text-2xl text-gray-600" />
          </div>

          {/* For category checkbox -------------->  */}
          <SelectCategory title={"Programming"} noOfCourse={23} />
          <SelectCategory title={"Marketing"} noOfCourse={23} />
          <SelectCategory title={"Web Development"} noOfCourse={23} />
          <SelectCategory title={"UI & UX Design"} noOfCourse={23} />
          <SelectCategory title={"Business"} noOfCourse={23} />
          <SelectCategory title={"App Development"} noOfCourse={23} />

          {/* for course level checkbox ----------------->  */}
          <div className="flex justify-between items-center mt-5">
            <h3 className="font-medium">Course Level</h3>
            <RiArrowDropDownLine className="text-2xl text-gray-600" />
          </div>
          <SelectCategory title={"All level"} noOfCourse={23} />
          <SelectCategory title={"Beginner"} noOfCourse={23} />
          <SelectCategory title={"Intermediate"} noOfCourse={23} />
          <SelectCategory title={"Expert"} noOfCourse={23} />

          {/* for price checkbox ---------------------->  */}
          <div className="flex justify-between items-center mt-5">
            <h3 className="font-medium">Price</h3>
            <RiArrowDropDownLine className="text-2xl text-gray-600" />
          </div>
          <SelectCategory title={"$0 - $100"} noOfCourse={23} />
          <SelectCategory title={"$101 - $200"} noOfCourse={23} />
          <SelectCategory title={"$201 - $500"} noOfCourse={23} />
          <SelectCategory title={"$500 above"} noOfCourse={23} />

          {/* course period ------------------>  */}
          <div className="flex justify-between items-center mt-5">
            <h3 className="font-medium text-gray-500">Course Period</h3>
            <RiArrowDropUpLine className="text-2xl text-gray-600" />
          </div>

          {/* Rating --------------->  */}
          <div className="flex justify-between items-center mt-5">
            <h3 className="font-medium text-gray-500">Rating</h3>
            <RiArrowDropUpLine className="text-2xl text-gray-600" />
          </div>
        </div>

        {/* Search results --------------------->  */}
        <div className="flex-1">Show Results</div>
      </div>
    </div>
  );
}

export default CoursesPage;

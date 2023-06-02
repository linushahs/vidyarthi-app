import Header from "../landing-page-components/Header";
import Course from "../landing-page-components/Course";
import Footer from "../landing-page-components/Footer";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import SelectCategory from "./SelectCategory";

function CoursesPage() {
  return (
    <div className="">
      <Header />

      {/* Search (All types of selection) section  */}
      {/* Header Section ---------------->  */}
      <div className="py-12 bg-sec px-24 flex gap-4 justify-between items-center">
        {/* search button  */}
        <div>
          <label className="text-sm text-gray-500 mb-2">Search:</label>

          <span className="flex gap-2 mt-2 placeholder:text-slate-400  bg-white w-full rounded py-3 px-2  ">
            <span className="  flex pl-1 items-center text-[#4CBC9A]">
              <BiSearch className="text-xl" />
            </span>
            <input
              className=" p-0 bg-transparent border-0 outline-none focus:ring-0"
              placeholder="Search your courses"
              type="text"
              name="search"
            />
          </span>
        </div>

        {/* sort by button --------------->  */}
        <label className="flex-1">
          <span className="text-sm text-gray-500 mb-4">Sort by:</span>
          <select
            className=" block w-full px-4 py-3 mt-2  text-sm text-gray-700 bg-white border-1 border-white  rounded
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
            className="w-full px-4 py-3 text-sm  mt-2  text-gray-700 bg-white border-1 border-white rounded
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
          <span className="text-sm text-gray-500">Category:</span>
          <select
            className="w-full px-4 py-3 text-sm mt-2  text-gray-700 bg-white border-1 border-white rounded
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
          <span className="text-sm text-gray-500 mb-2">Rating:</span>
          <select
            className="w-full px-4 py-3 text-sm mt-2  text-gray-700 bg-white border-1 border-white rounded
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
      <div className="flex pl-24 bg-sec pb-24 gap-8">
        {/* select category / course level / price / course period / rating */}
        {/* left side------------------------------------------>  */}
        <div className="rounded-md w-80 bg-white p-4 h-full">
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
        {/* right side -------------------->  */}
        <div className="flex-1 pb-12 ">
          <h1 className="text-xl font-semibold mt-2 mb-4">
            Search Results(32)
          </h1>

          {/* Courses sections --------------->  */}
          <div className="flex gap-4 flex-wrap">
            <Course
              imgSrc={"assets/courses-img/img1.png"}
              tag={"Design Courses"}
              title={"How to become a good designer"}
              desc={
                "The DesignCourse is the best place to learn and understand UI fundamentals."
              }
              price={25}
            />
            <Course
              imgSrc={"assets/courses-img/img2.png"}
              tag={"Coding"}
              title={"Learn about Android Coding"}
              desc={
                "The DesignCourse is the best place to learn and understand UI fundamentals."
              }
              price={20}
            />
            <Course
              imgSrc={"assets/courses-img/img3.png"}
              tag={"Design Courses"}
              title={"How to become a good designer"}
              desc={
                "The DesignCourse is the best place to learn and understand UI fundamentals."
              }
              price={25}
            />
            <Course
              imgSrc={"assets/courses-img/img1.png"}
              tag={"Design Courses"}
              title={"How to become a good designer"}
              desc={
                "The DesignCourse is the best place to learn and understand UI fundamentals."
              }
              price={25}
            />
            <Course
              imgSrc={"assets/courses-img/img1.png"}
              tag={"Design Courses"}
              title={"How to become a good designer"}
              desc={
                "The DesignCourse is the best place to learn and understand UI fundamentals."
              }
              price={25}
            />
            <Course
              imgSrc={"assets/courses-img/img2.png"}
              tag={"Coding"}
              title={"Learn about Android Coding"}
              desc={
                "The DesignCourse is the best place to learn and understand UI fundamentals."
              }
              price={20}
            />
          </div>

          {/* Next / Previous Section ----------------->  */}
          {/* ------------------------>  */}
          <div className="pt-12 absolute left-1/2 -translate-x-1/2 flex justify-center gap-3 items-center">
            <span className="cursor-pointer font-medium text-gray-500 text-sm">
              Prev
            </span>
            <span className="cursor-pointer p-2 w-11 text-center bg-current text-white border-[1.5px] border-current rounded ">
              1
            </span>
            <span className="cursor-pointer p-2 w-11 text-center text-gray-400 border-2 border-gray-200 rounded ">
              2
            </span>
            <span className="cursor-pointer p-2 w-11 text-center text-gray-400 border-2 border-gray-200 rounded ">
              3
            </span>
            <span className="cursor-pointer p-2 w-11 text-center text-gray-400 border-2 border-gray-200 rounded ">
              4
            </span>
            <span className="cursor-pointer p-2 w-11 text-center text-gray-400 border-2 border-gray-200 rounded ">
              5
            </span>
            <span className="cursor-pointer font-medium text-gray-500 text-sm">
              Next
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CoursesPage;

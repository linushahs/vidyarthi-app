import { BiSearch } from "react-icons/bi";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Course from "./Course";
import Footer from "./Footer";

function Content() {
  return (
    <div className="">
      {/* Front page elements  */}
      {/* ------------------------ */}
      <div className="bg-sec pt-20 pl-24 pb-16 flex justify-between items-center">
        {/* Left side -- --------------->  */}
        <div className="  flex flex-col">
          <h1 className="text-5xl font-semibold leading-snug">
            Learning that <br /> gets you
          </h1>
          <p className="font-medium mt-6">
            Skills for your present (and your
            <br /> future). Get started with us.
          </p>

          {/* Search button -->  */}
          <div className="flex justify-between bg-white shadow-md w-96 py-1.5 mt-12 pl-4 rounded-lg">
            <input
              type="text"
              placeholder="Search for anything"
              className="focus:outline-transparent flex-1"
            />
            <button className="mr-2">
              <BiSearch className="w-12 h-12 text-md bg-current p-3 text-white rounded-lg" />
            </button>
          </div>
        </div>

        {/* Right side ------------> */}
        {/* Animation part goes here ->  */}
        <div className=" flex h-96 gap-3 justify-end z-10">
          {/* Design courses --------->  */}
          <div className="relative text-white  rounded-lg object-cover w-80 h-full bg-top bg-[url('https://images.unsplash.com/photo-1613980790147-f4f449df0dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]">
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-end  px-5 py-5 z-10">
              <h2 className="text-xl font-medium">
                Design <br /> Courses
              </h2>
              <p className="text-center text-xl font-medium">
                100+ <br />
                <span className="text-base font-light">Categories</span>
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-b from-transparent to-black opacity-80 "></div>
          </div>

          {/* programming ------------------->  */}
          <div className="relative text-white  rounded-lg object-cover w-56 h-full bg-top bg-[url('https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]">
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-end  px-5 py-5 z-10">
              <h2 className="text-xl font-medium -rotate-90 -translate-y-14 -translate-x-14">
                Programming
              </h2>
              <p className="text-center text-xl font-medium invisible">
                100+ <br />
                <span className="text-base font-light">Categories</span>
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-bl from-transparent to-black opacity-80 "></div>
          </div>

          {/* Marketing ----------------------->  */}
          <div className="relative text-white  rounded-lg  w-40 h-full bg-cover  bg-[url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-end  px-5 py-5 z-10">
              <h2 className="text-xl font-medium -rotate-90 -translate-y-10 -translate-x-10">
                Marketing
              </h2>
              <p className="text-center text-xl font-medium invisible">
                100+ <br />
                <span className="text-base font-light">Categories</span>
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-bl from-transparent to-black opacity-80 "></div>
          </div>

          {/* art -------------------------->  */}
          <div className="relative text-white  rounded-lg  w-36 h-full bg-cover  bg-[url('https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')]">
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-end  px-5 py-5 z-10">
              <h2 className="text-xl font-medium -rotate-90 -translate-y-2 -translate-x-2">
                Art
              </h2>
              <p className="text-center text-xl font-medium invisible">
                100+ <br />
                <span className="text-base font-light">Categories</span>
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-bl from-transparent to-black opacity-80 "></div>
          </div>
        </div>
      </div>

      {/* Trusted companies section ->  */}
      {/* -------------------------------->  */}
      <div className="flex justify-between font-medium px-24 pb-16 bg-sec">
        <div className="w-96 border-solid border-r-2 border-black">
          Authentic Content <br /> from the most trusted names
        </div>
        <div className="flex items-center w-1/2 justify-between">
          <img alt="moodle" src="assets/moodle.png" className="h-9" />
          <img alt="guto" src="assets/Guto.png" className="h-9" />
          <img alt="ecademy" src="assets/ecademy.png" className="h-9" />
        </div>
      </div>

      {/* Most Popular Courses ----------------->  */}
      {/* ------------------------------------------> */}
      <div className="px-24 py-12 bg-gradient-to-r from-white to-sec">
        {/* Top section -------->  */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Most Popular Courses</h2>
          <div className="flex items-center">
            {/* Left and right button */}
            <FiArrowLeft className="ml-4 rounded-full w-10 h-10 bg-white shadow p-2 " />
            <FiArrowRight className="ml-8 rounded-full bg-current w-10 h-10 text-white p-2" />
          </div>
        </div>

        {/* Courses section -----------------------> */}
        <div className="flex justify-between">
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
        </div>
      </div>

      {/* Features of Vidyarthi app ------------> 
      ---------------------------> */}
      <div className="px-24 pt-10 pb-16">
        <h1 className="text-2xl font-semibold text-center pb-8">
          Why you will love learning with Vidyarthi
        </h1>
        <div className="flex justify-between pt-12">
          {/* left side --------------->  */}
          <div className="w-1/4">
            {/* Flexible Learning ------------>  */}
            <div>
              <img
                src="assets/features-img/img1.png"
                alt=""
                className="w-14 h-14"
              />
              <h3 className="text-xl font-semibold my-2">Flexible learning</h3>
              <p className="text-gray-600 text-sm">
                Lessons are tailored made to help you learn at your own level
                and pace. No More hassle for Live Classes.
              </p>
            </div>

            {/* Visually Immersive ------------>  */}
            <div className="mt-12">
              <img
                src="assets/features-img/img2.png"
                alt=""
                className="w-14 h-14"
              />
              <h3 className="text-xl font-semibold my-2">Visually Immersive</h3>
              <p className="text-gray-600 text-sm">
                Our courses are designed to make full use of visuals and
                animation to get you to learn in the most effective and
                efficient way.
              </p>
            </div>
          </div>

          {/* middle part of features ------------> */}
          <div className="bg-sec/75 rounded-full w-[450px] h-[450px] relative z-10">
            <img
              alt="feature-img"
              src="assets/features-img/img5.png"
              className="absolute -top-10 -left-16 w-48 h-60"
            />
            <img
              alt="feature-img"
              src="assets/features-img/img6.png"
              className="absolute -bottom-10 -left-16 w-48 h-60"
            />
            {/* Certificate section --->  */}
            <img
              alt="feature-img"
              src="assets/features-img/img7.png"
              className="absolute top-28 left-14 w-80 h-60 -z-10"
            />
            <img
              alt="feature-img"
              src="assets/features-img/img8.png"
              className="absolute bottom-0 -right-16 w-60 "
            />
          </div>

          {/* right side --------------------->  */}
          <div className="w-1/4">
            {/* Industry Relevant Curriculum ----------->  */}
            <div>
              <img
                src="assets/features-img/img3.png"
                alt=""
                className="w-14 h-14"
              />
              <h3 className="text-xl font-semibold my-2">
                Industry Relevant Curriculum
              </h3>
              <p className="text-gray-600 text-sm">
                Learn from people who are actually working in the industry along
                with their insights and experiences.
              </p>
            </div>

            {/* Have Fun with it -------------------> */}
            <div className="mt-12">
              <img
                src="assets/features-img/img4.png"
                alt=""
                className="w-14 h-14"
              />
              <h3 className="text-xl font-semibold my-2">Have Fun with it</h3>
              <p className="text-gray-600 text-sm">
                Our courses are designed to be interactive with interesting
                quizzes and case studies. They are designed to be in a
                binge-able format so you can learn and not get bored.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Most popular courses ------------------>  */}
      {/* ----------------------------->  */}
      <div className="px-24 py-12 bg-gradient-to-r from-white to-sec">
        {/* Top section -------->  */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Most Popular Courses</h2>
          <div className="flex items-center">
            {/* Left and right button */}
            <FiArrowLeft className="ml-4 rounded-full w-10 h-10 bg-white shadow p-2 " />
            <FiArrowRight className="ml-8 rounded-full bg-current w-10 h-10 text-white p-2" />
          </div>
        </div>

        {/* Courses section -----------------------> */}
        <div className="flex justify-between">
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
        </div>
      </div>

      {/* Most popular courses ------------------>  */}
      {/* ----------------------------->  */}
      <div className="px-24 py-12 bg-gradient-to-r from-white to-sec">
        {/* Top section -------->  */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Most Popular Courses</h2>
          <div className="flex items-center">
            {/* Left and right button */}
            <FiArrowLeft className="ml-4 rounded-full w-10 h-10 bg-white shadow p-2 " />
            <FiArrowRight className="ml-8 rounded-full bg-current w-10 h-10 text-white p-2" />
          </div>
        </div>

        {/* Courses section -----------------------> */}
        <div className="flex justify-between">
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
        </div>
      </div>

      {/* Most popular courses ------------------>  */}
      {/* ----------------------------->  */}
      <div className="px-24 py-12 bg-gradient-to-r from-white to-sec">
        {/* Top section -------->  */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Most Popular Courses</h2>
          <div className="flex items-center">
            {/* Left and right button */}
            <FiArrowLeft className="ml-4 rounded-full w-10 h-10 bg-white shadow p-2 " />
            <FiArrowRight className="ml-8 rounded-full bg-current w-10 h-10 text-white p-2" />
          </div>
        </div>

        {/* Courses section -----------------------> */}
        <div className="flex justify-between">
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
        </div>
      </div>

      {/* Join Us  section ---------------------->
      ----------------------------------------> */}
      <div className="flex justify-center  py-12">
        <img alt="joinus" src="assets/joinus.png" className="w-1/3" />
        <div className="ml-20">
          <h1 className="text-5xl font-medium mt-6">Join Us!</h1>
          <p className="text-gray-500 text-sm mt-3">
            Subscribe to our weekly newsletter and be a part of our
            <br /> journey to self discovery and love.
          </p>

          {/* Subscribe button --------------->  */}
          <div className="flex justify-between bg-gray-50  mt-5 pl-4 rounded-lg">
            <input
              type="text"
              placeholder="Your Email"
              className="focus:outline-none bg-transparent placeholder:text-sm w-96"
            />
            <button className="text-sm bg-current p-3 text-white rounded-tr-lg rounded-br-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer section goes here ------------------>  */}
      {/* -------------------------------------->  */}
      <Footer />
    </div>
  );
}

export default Content;

import { BiSearch } from "react-icons/bi";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Course from "./Course";

function Content() {
  return (
    <div className="">
      {/* Front page elements  */}
      {/* ------------------------ */}
      <div className="bg-sec pl-24 pb-[80px]">
        {/* Left side -- --------------->  */}
        <div className=" pt-24 flex flex-col">
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

          {/* Right side ------------> */}
          {/* Animation part goes here ->  */}
          <div className="w-1/2 h-1/2 absolute right-0 bg-slate-400 z-10">
            Animated Part
          </div>
        </div>

        {/* Trusted companies section ->  */}
        <div className="flex justify-between mt-24 font-medium  mr-24">
          <div className="w-96 border-solid border-r-2 border-black">
            Authentic Content <br /> from the most trusted names
          </div>
          <div className="flex items-center w-1/2 justify-between">
            <img src="vidyarthi-app/assets/moodle.png" className="h-9" />
            <img src="vidyarthi-app/assets/Guto.png" className="h-9" />
            <img src="vidyarthi-app/assets/ecademy.png" className="h-9" />
          </div>
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
            imgSrc={"vidyarthi-app/assets/courses-img/img1.png"}
            tag={"Design Courses"}
            title={"How to become a good designer"}
            desc={
              "The DesignCourse is the best place to learn and understand UI fundamentals."
            }
            price={25}
          />
          <Course
            imgSrc={"vidyarthi-app/assets/courses-img/img2.png"}
            tag={"Coding"}
            title={"Learn about Android Coding"}
            desc={
              "The DesignCourse is the best place to learn and understand UI fundamentals."
            }
            price={20}
          />
          <Course
            imgSrc={"vidyarthi-app/assets/courses-img/img3.png"}
            tag={"Design Courses"}
            title={"How to become a good designer"}
            desc={
              "The DesignCourse is the best place to learn and understand UI fundamentals."
            }
            price={25}
          />
          <Course
            imgSrc={"vidyarthi-app/assets/courses-img/img1.png"}
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
                src="vidyarthi-app/assets/features-img/img1.png"
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
                src="vidyarthi-app/assets/features-img/img2.png"
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
              src="vidyarthi-app/assets/features-img/img5.png"
              className="absolute -top-10 -left-16 w-48 h-60"
            />
            <img
              src="vidyarthi-app/assets/features-img/img6.png"
              className="absolute -bottom-10 -left-16 w-48 h-60"
            />
            {/* Certificate section --->  */}
            <img
              src="vidyarthi-app/assets/features-img/img7.png"
              className="absolute top-28 left-14 w-80 h-60 -z-10"
            />
            <img
              src="vidyarthi-app/assets/features-img/img8.png"
              className="absolute bottom-0 -right-16 w-60 "
            />
          </div>

          {/* right side --------------------->  */}
          <div className="w-1/4">
            {/* Industry Relevant Curriculum ----------->  */}
            <div>
              <img
                src="vidyarthi-app/assets/features-img/img3.png"
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
                src="vidyarthi-app/assets/features-img/img4.png"
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
            imgSrc={"vidyarthi-app/assets/courses-img/img1.png"}
            tag={"Design Courses"}
            title={"How to become a good designer"}
            desc={
              "The DesignCourse is the best place to learn and understand UI fundamentals."
            }
            price={25}
          />
          <Course
            imgSrc={"vidyarthi-app/assets/courses-img/img2.png"}
            tag={"Coding"}
            title={"Learn about Android Coding"}
            desc={
              "The DesignCourse is the best place to learn and understand UI fundamentals."
            }
            price={20}
          />
          <Course
            imgSrc={"vidyarthi-app/assets/courses-img/img3.png"}
            tag={"Design Courses"}
            title={"How to become a good designer"}
            desc={
              "The DesignCourse is the best place to learn and understand UI fundamentals."
            }
            price={25}
          />
          <Course
            imgSrc={"vidyarthi-app/assets/courses-img/img1.png"}
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
            imgSrc={"vidyarthi-app/assets/courses-img/img1.png"}
            tag={"Design Courses"}
            title={"How to become a good designer"}
            desc={
              "The DesignCourse is the best place to learn and understand UI fundamentals."
            }
            price={25}
          />
          <Course
            imgSrc={"vidyarthi-app/assets/courses-img/img2.png"}
            tag={"Coding"}
            title={"Learn about Android Coding"}
            desc={
              "The DesignCourse is the best place to learn and understand UI fundamentals."
            }
            price={20}
          />
          <Course
            imgSrc={"vidyarthi-app/assets/courses-img/img3.png"}
            tag={"Design Courses"}
            title={"How to become a good designer"}
            desc={
              "The DesignCourse is the best place to learn and understand UI fundamentals."
            }
            price={25}
          />
          <Course
            imgSrc={"vidyarthi-app/assets/courses-img/img1.png"}
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
            imgSrc={"vidyarthi-app/assets/courses-img/img1.png"}
            tag={"Design Courses"}
            title={"How to become a good designer"}
            desc={
              "The DesignCourse is the best place to learn and understand UI fundamentals."
            }
            price={25}
          />
          <Course
            imgSrc={"vidyarthi-app/assets/courses-img/img2.png"}
            tag={"Coding"}
            title={"Learn about Android Coding"}
            desc={
              "The DesignCourse is the best place to learn and understand UI fundamentals."
            }
            price={20}
          />
          <Course
            imgSrc={"vidyarthi-app/assets/courses-img/img3.png"}
            tag={"Design Courses"}
            title={"How to become a good designer"}
            desc={
              "The DesignCourse is the best place to learn and understand UI fundamentals."
            }
            price={25}
          />
          <Course
            imgSrc={"vidyarthi-app/assets/courses-img/img1.png"}
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
        <img src="vidyarthi-app/assets/joinus.png" />
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
      <div className="bg-current py-12 px-24 flex justify-between ">
        {/* Left side -------------->  */}
        <div className="w-1/3 text-white flex flex-col">
          <img
            src="vidyarthi-app/assets/Vidyarthi-White-Logo.png"
            width="140px"
            className=""
          />
          <p className="mt-6 text-sm">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </p>

          <div className="text-white/50 text-sm">
            &copy; 2022 - <span>Vidyarthi.</span> All rights reserved
          </div>
        </div>

        {/* Right side ---------->  */}
        <div className="flex justify-between w-1/2 text-white ">
          {/* Three Menus About, Courses, Company ---------> */}

          {/* About menu -------------------->  */}
          <div>
            <h3 className="text-[22px] mb-6">About</h3>
            <ul>
              <li className="mb-3 text-sm">
                <a href="">About Us</a>
              </li>
              <li className="mb-3 text-sm">
                <a href="">Courses</a>
              </li>
              <li className="mb-3 text-sm">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Courses menu ----------->  */}
          <div>
            <h3 className="text-[22px] mb-6">Courses</h3>
            <ul>
              <li className="mb-3 text-sm">
                <a href="">Programming Courses</a>
              </li>
              <li className="mb-3 text-sm">
                <a href="">Design Courses</a>
              </li>
              <li className="mb-3 text-sm">
                <a href="">Art</a>
              </li>
              <li className="mb-3 text-sm">
                <a href="">Marketing</a>
              </li>
            </ul>
          </div>

          {/* Company menu --------------->  */}
          <div>
            <h3 className="text-[22px] mb-6">Company</h3>
            <ul>
              <li className="mb-3 text-sm">
                <a href="">FAQs</a>
              </li>
              <li className="mb-3 text-sm">
                <a href="">Privacy & Policy</a>
              </li>
              <li className="mb-3 text-sm">
                <a href="">Terms of Services</a>
              </li>
              <li className="mb-3 text-sm">
                <a href="">Help & Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

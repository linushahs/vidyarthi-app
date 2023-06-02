import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex">
      {/* left side ------------>  */}
      {/* ------------------------>  */}
      <div className="relative h-screen">
        <Link to="/">
          <img
            alt=""
            src="assets/Vidyarthi_Logo.png"
            className="absolute top-8 left-12"
          />
        </Link>
        <img alt="" src="assets/signup.png" className=" h-full" />
      </div>

      {/* right side -------------------->  */}
      {/* ---------------------------------->  */}
      <div className="pt-10 pr-12 flex-1">
        {/* top section --------------->  */}
        <div className="flex justify-end items-center">
          <span className="text-gray-400 text-sm cursor-pointer">
            Already have an account?
          </span>
          <Link to="/signin">
            <button className="ml-4 font-medium w-32 text-center py-2  rounded bg-current text-white">
              Login
            </button>
          </Link>
        </div>

        {/* main section (login page ) ------------>  */}
        <div className="pl-10 pt-16">
          <h1 className="text-3xl font-medium mb-8">Create your Account</h1>

          <label htmlFor="fname">Full Name</label>
          <br />
          <div className="flex justify-between gap-8">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              className="mt-1 mb-4 placeholder:text-xs  focus:outline-current border-gray-200 border-solid border-[1.5px] rounded py-2 px-1.5 text-sm flex-1"
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              className="mt-1 mb-4 placeholder:text-xs  focus:outline-current border-gray-200 border-solid border-[1.5px] rounded py-2 px-1.5 text-sm flex-1"
            />
          </div>

          {/* Email address ----------------->  */}
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="mt-1 mb-4 placeholder:text-xs  focus:outline-current border-gray-200 border-solid border-[1.5px] rounded py-2 px-1.5 text-sm w-full"
          />
          <br />

          {/* password ---------------------- >  */}
          <label htmlFor="pw">Password</label>
          <br />
          <div className="flex justify-between gap-8">
            {/* two password buttons ------------------>  */}
            <div className="flex flex-1 justify-between focus:outline-current items-center border-gray-200 border-solid border-[1.5px] rounded">
              <input
                type="password"
                name="pw"
                placeholder="Create password"
                className="flex-1 h-full placeholder:text-xs py-2  focus:outline-none rounded px-1.5 text-sm "
              />
              <HiOutlineEye className="mr-3 text-gray-400 text-lg cursor-pointer" />
            </div>

            <div className="flex flex-1 justify-between focus:outline-current items-center border-gray-200 border-solid border-[1.5px] rounded">
              <input
                type="password"
                name="pw"
                placeholder="Confirm password"
                className="flex-1 h-full placeholder:text-xs rounded focus:outline-none px-1.5 text-sm "
              />
              <HiOutlineEye className="mr-3 text-gray-400 text-lg cursor-pointer" />
            </div>
          </div>

          {/* terms and conditions ------------------>  */}
          <div className="flex items-center my-5">
            <input
              type="checkbox"
              name="remember"
              className="w-5 h-5 mr-2 form-checkbox text-current border-2 border-gray-200 rounded-sm"
            />
            <span className="">
              I agree with all of your{" "}
              <span className="text-current"> terms & conditions</span>
            </span>
          </div>
          {/* create account button ----------->  */}
          <button className="bg-current text-white py-2 w-1/2 rounded">
            Create an account
          </button>

          {/* or signup between lines ---------->  */}
          <div className="flex justify-between items-center my-5">
            <hr className="flex-1" />
            <span className="text-xs ">Or SignUp</span>
            <hr className="flex-1" />
          </div>

          {/* social buttons ------------->  */}
          <div className="flex justify-center">
            <div className="border-[1.5px] border-gray-200 hover:border-3 hover:border-gray-400 cursor-pointer  flex  pr-5 pl-3 items-center justify-center">
              <span className=" border-r-[1.5px] border-gray-200 py-2 mr-4">
                <FcGoogle className="text-2xl mr-2  " />
              </span>
              <p className=" text-sm">Google</p>
            </div>
            <div className="ml-7 border-[1.5px] border-gray-200 hover:border-3 hover:border-gray-400 cursor-pointer  flex pr-5 pl-3 items-center flex-start">
              <span className=" border-r-[1.5px] border-gray-200 py-2 mr-4 ">
                <BsFacebook className="text-2xl text-blue-600 mr-2" />
              </span>
              <p className=" text-sm">Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

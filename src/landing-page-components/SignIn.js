import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";

function SignIn() {
  return (
    <div className="flex justify-between">
      {/* left side ------------>  */}
      {/* ------------------------>  */}
      <div className="relative w-[750px] h-screen">
        <img
          src="vidyarthi-app/assets/Vidyarthi_Logo.png"
          className="absolute top-8 left-12"
        />
        <img
          src="vidyarthi-app/assets/signin.png"
          className="w-[680px] 2xl:w-full h-full"
        />
      </div>

      {/* right side -------------------->  */}
      {/* ---------------------------------->  */}
      <div className="pt-10 pr-12 flex-1">
        {/* top section --------------->  */}
        <div className="flex justify-end items-center">
          <span className="text-gray-400 text-sm cursor-pointer">
            Don't have an account?
          </span>
          <button className="ml-4 font-medium w-32 text-center py-2  rounded-md bg-current text-white">
            <a href="">Sign Up</a>
          </button>
        </div>

        {/* main section (login page ) ------------>  */}
        <div className="pl-10 pt-16">
          <h1 className="text-3xl font-medium mb-8">Login to your Account</h1>

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

          {/* password ------------>  */}
          <label htmlFor="pw">Password</label>
          <br />
          <div className="flex flex-1 justify-between focus:outline-current items-center border-gray-200 border-solid border-[1.5px] rounded">
            <input
              type="password"
              name="pw"
              placeholder="Create password"
              className="flex-1 h-full placeholder:text-xs py-2  focus:outline-none px-1.5 text-sm "
            />
            <HiOutlineEye className="mr-3 text-gray-400 text-lg cursor-pointer" />
          </div>

          {/* remember me ------------------>  */}
          <div className="flex items-center my-5">
            <input
              type="checkbox"
              name="remember"
              className="w-5 h-5 mr-2 form-checkbox text-current border-2 border-gray-200 rounded-sm"
            />
            <span className="text-gray-400">Remember Me</span>
          </div>
          {/* login button ----------->  */}
          <button className="bg-current text-white py-2 w-1/2 rounded">
            <a href="#">Login</a>
          </button>

          {/* or signup between lines ---------->  */}
          <div className="flex justify-between items-center my-5">
            <hr className="w-[340px] 2xl:w-[380px]" />
            <span className="text-xs ">Or SignUp</span>
            <hr className="w-[340px] 2xl:w-[380px]" />
          </div>

          {/* social buttons ------------->  */}
          <div className="flex justify-center">
            <div className="border-[1.5px] border-gray-200 flex  pr-5 pl-3 items-center justify-center">
              <span className=" border-r-[1.5px] border-gray-200 py-2 mr-4 cursor-pointer">
                <FcGoogle className="text-2xl mr-2  " />
              </span>
              <p className="cursor-pointer text-sm">Google</p>
            </div>
            <div className="ml-7 border-[1.5px] border-gray-200 flex pr-5 pl-3 items-center flex-start">
              <span className=" border-r-[1.5px] border-gray-200 py-2 mr-4 cursor-pointer">
                <BsFacebook className="text-2xl text-blue-600 mr-2" />
              </span>
              <p className="cursor-pointer text-sm">Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

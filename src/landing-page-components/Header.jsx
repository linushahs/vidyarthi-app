import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-sec pt-12">
      <div className="mx-24 flex justify-between items-center">
        <Link to="/">
          <img
            src="assets/Vidyarthi_Logo.png"
            alt="Logo"
            width="140px"
            height="50px"
          />
        </Link>
        <ul className="flex items-center">
          <li className="ml-12 font-medium">
            <a href="/">About Us</a>
          </li>
          <li className="ml-12 font-medium">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="ml-12 font-medium">
            <a href="/">Contact Us</a>
          </li>
          <Link to="/signin">
            <li className="ml-8 font-medium w-36 cursor-pointer text-center py-2.5 shadow-md rounded-md bg-white">
              Login
            </li>
          </Link>
          <Link to="/signup">
            <li className="ml-8 font-medium w-36 cursor-pointer text-center py-2.5  rounded-md bg-current text-white">
              Sign Up
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;

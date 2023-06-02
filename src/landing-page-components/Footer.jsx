import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-current py-12 px-24 flex justify-between ">
      {/* Left side -------------->  */}
      <div className="w-1/3 text-white flex flex-col justify-between">
        <div>
          <img
            alt="logo"
            src="assets/Vidyarthi-White-Logo.png"
            width="140px"
            className=""
          />
          <p className="mt-4 text-sm">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </p>
        </div>

        <div className="text-white/50 text-sm ">
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
              <Link to="/">About Us</Link>
            </li>
            <li className="mb-3 text-sm">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="mb-3 text-sm">
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Courses menu ----------->  */}
        <div>
          <h3 className="text-[22px] mb-6">Courses</h3>
          <ul>
            <li className="mb-3 text-sm">
              <a href="/">Programming Courses</a>
            </li>
            <li className="mb-3 text-sm">
              <a href="/">Design Courses</a>
            </li>
            <li className="mb-3 text-sm">
              <a href="/">Art</a>
            </li>
            <li className="mb-3 text-sm">
              <a href="/">Marketing</a>
            </li>
          </ul>
        </div>

        {/* Company menu --------------->  */}
        <div>
          <h3 className="text-[22px] mb-6">Company</h3>
          <ul>
            <li className="mb-3 text-sm">
              <a href="/">FAQs</a>
            </li>
            <li className="mb-3 text-sm">
              <a href="/">Privacy & Policy</a>
            </li>
            <li className="mb-3 text-sm">
              <a href="/">Terms of Services</a>
            </li>
            <li className="mb-3 text-sm">
              <a href="/">Help & Support</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

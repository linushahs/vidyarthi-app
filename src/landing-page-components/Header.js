function Header() {
  return (
    <div className="bg-sec pt-12">
      <div className="mx-24 flex justify-between items-center">
        <img
          src="vidyarthi-app/assets/Vidyarthi_Logo.png"
          alt="Logo"
          width="140px"
          height="50px"
        />

        <ul className="flex items-center">
          <li className="ml-12 font-medium">
            <a href="">About Us</a>
          </li>
          <li className="ml-12 font-medium">
            <a href="">Courses</a>
          </li>
          <li className="ml-12 font-medium">
            <a href="">Contact Us</a>
          </li>
          <li className="ml-12 font-medium w-32 text-center py-2.5 shadow-md rounded-md bg-white">
            <a href="">Login</a>
          </li>
          <li className="ml-8 font-medium w-32 text-center py-2.5  rounded-md bg-current text-white">
            <a href="">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

function Course({ imgSrc, tag, title, rating, reviews, desc, price }) {
  return (
    <div className="w-80 shadow-md p-3.5 rounded-md bg-white">
      <img src={imgSrc} alt="" className="w-full rounded-md mb-4" />
      {/* Tag of course*/}
      <span className="bg-[#92C9FB] mt-4 tracking-wider font-semibold text-white p-1.5 rounded-md text-xs">
        {tag}
      </span>
      {/* Title of course */}
      <h1 className="text-xl font-semibold mt-4">{title}</h1>
      {/* Rating and reviews  */}
      <div className="flex  mt-2 text-sm">
        <FaStar className="text-yellow-400" />
        <FaStar className="ml-0.5 text-yellow-400" />
        <FaStar className="ml-0.5 text-yellow-400" />
        <FaStar className="ml-0.5 text-yellow-400" />
        <FaStar className="ml-0.5 text-gray-300" />
        <span className="mx-1">4.6</span>
        <span>(246 reviews)</span>
      </div>
      {/* Description  */}
      <p className="text-gray-600 text-sm mt-4">{desc}</p>
      {/* price of course  */}
      <div className="mt-4 flex justify-between items-center">
        <h3 className="font-semibold flex items-center">
          <span className="text-current text-2xl">${price}</span>/courses
        </h3>
        <FiArrowRight className="w-10 h-10 shadow p-2 rounded-full hover:shadow-lg hover:bg-current hover:text-white hover:shadow-current cursor-pointer" />
      </div>
    </div>
  );
}

export default Course;

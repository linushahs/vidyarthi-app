import React from "react";

function SelectCategory({ title, noOfCourse }) {
  return (
    <div className="flex justify-between items-center  mt-3">
      <span className="flex items-center">
        <input
          type="checkbox"
          className="w-5 h-5 mr-2 form-checkbox text-[#4CBC9A] border-2 border-gray-200 rounded"
        />
        {title}
      </span>
      <span className="rounded-md bg-[#F4F5F9] text-xs text-black p-1">
        {noOfCourse}
      </span>
    </div>
  );
}

export default SelectCategory;

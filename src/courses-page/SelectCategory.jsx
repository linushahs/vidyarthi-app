// eslint-disable-next-line react/prop-types
function SelectCategory({ title, noOfCourse }) {
  return (
    <div className="flex justify-between items-center  mt-3">
      <span className="flex items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-[#4CBC9A]  border-gray-300 rounded mr-3 focus:ring-0 focus:ring-offset-0 "
        ></input>

        {title}
      </span>
      <span className="rounded-md bg-[#F4F5F9] text-xs text-black p-1">
        {noOfCourse}
      </span>
    </div>
  );
}

export default SelectCategory;

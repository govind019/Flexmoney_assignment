import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { authUser } = useAuthContext();
  return (
    <>    
    {/* {authUser && 
            <div className="flex items-center gap-2 justify-center">
            <h1 className='text-white'>{authUser.fullName}</h1>
            <img className="h-10 w-10" src={authUser.profilePic} alt="" />
            </div>
            }
            <LogoutButton /> */}
    {authUser && 
    <div className="relative inline-flex">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-medium rounded text-white border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-500"
      >
        <img
          className="w-8 h-auto rounded-full"
          src={authUser?.profilePic}
          alt="Avatar"
        />
        <span className="text-gray-200 font-medium truncate max-w-[7.5rem]">
          {authUser?.fullName}
        </span>
        <svg
          className={`size-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-11 w-60 bg-gray-800 text-gray-50 shadow-md rounded-lg transition-all duration-200"
        >
          <div className="p-1 space-y-0.5">
            <Link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-50 hover:bg-gray-500"
              to={"/profile/" + authUser._id}
            >
              Profile
            </Link>
            <div className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-50 hover:bg-gray-500">
                <LogoutButton/>
            </div>
          </div>
        </div>
      )}
    </div>
}
    </>

  );
};

export default ProfileDropdown;

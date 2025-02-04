import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown.jsx";

const Header = () => {
  return (
    <div className='flex h-[10vh] justify-between items-center bg-black md:px-5 px-1 py-2 sticky w-full top-0 z-50'>
        <div className="text-white font-bold text-2xl">
            <Link to={'/'}>YogVeda</Link>
        </div>
        <div>
            <ProfileDropdown/>
        </div>
    </div>
  )
}

export default Header
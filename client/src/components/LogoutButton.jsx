import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout.js";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className=' w-full'>
			{!loading ? (
                <div className="cursor-pointer" onClick={logout}>
				    {/* <BiLogOut className='w-6 h-6 cursor-pointer'/> */}
                    {/* <div> */}
                        Logout 
                    {/* </div> */}
                </div>
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
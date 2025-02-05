import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";
import Cookies from "js-cookie";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const logout = async () => {
		setLoading(true);
        console.log('logging out');
		try {
			const res = await fetch("https://flexmoney-assignment-backend-t7j3.onrender.com/api/auth/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			// localStorage.removeItem("chat-user");
			Cookies.remove("chat-user");
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
export default useLogout;
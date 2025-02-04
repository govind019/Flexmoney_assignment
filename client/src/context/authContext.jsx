import { createContext, useContext, useState } from "react";
import Cookies from 'js-cookie';
export const AuthContext = createContext();

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	// const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

	const [authUser, setAuthUser] = useState(() => {
		const userCookie = Cookies.get("chat-user");
		return userCookie ? JSON.parse(userCookie) : null;
	  });

	return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};
import toast from "react-hot-toast"
import { useAuthContext } from "../context/authContext";
import { useState } from "react";
import Cookies from "js-cookie";

const useLogin = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} =useAuthContext();

  const login = async({username,password}) => {
    const success = handleInputErrors({username,password});
    if(!success) return;
    setLoading(true);
    try {
        const res = await fetch("https://flexmoney-assignment-backend-t7j3.onrender.com/api/auth/login",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username,password})
        })

        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }

        //cookies
        Cookies.set('chat-user', JSON.stringify(data), { expires: 1, secure: true, sameSite: 'Strict' });
        setAuthUser(data);

    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
    }
  }
  return {loading,login};
}

export default useLogin;

const handleInputErrors = ({username,password}) => {
    if(!username || !password){
        toast.error("Please fill all the fields");
        return false;
    }
    return true;
}
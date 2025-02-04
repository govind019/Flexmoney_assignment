import { useState, useEffect } from "react";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";



const useUserProfile = () => {
    const { authUser } = useAuthContext();
    const API_URL = `https://flexmoney-assignment-backend-t7j3.onrender.com/api/user/${authUser._id}`; 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState("");

  // Fetch user data
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser({
          fullName: data.fullName,
          username: data.username,
          age: data.age,
          gender: data.gender,
          monthlyFeePaid: data.monthlyFeePaid,
          enrollmentDate: data.enrollmentDate,
          status: data.status,
          batch: data.batch,
          profilePic: data.profilePic,
        });
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  // Update user profile
  const updateProfile = async (updatedData) => {
    if (!updatedData.fullName && !updatedData.age) {
      toast.error("Nothing to update :(");
      return;
    }
  
    if (updatedData.age < 18 || updatedData.age > 65) {
      toast.error("Age must be between 18 and 65 years.");
      return;
    }
  
    setUpdating(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      
      if (!res.ok) throw new Error("Failed to update profile");
  
      const data = await res.json();
      toast.success(data.message || "Profile updated successfully!");
    } catch (error) {
      setError(error.message || "Failed to update profile!!.");
      console.log(error);
    } finally {
      setUpdating(false);
    }
  };
  

  return { user, loading, updating, error, setUser, updateProfile };
};

export default useUserProfile;

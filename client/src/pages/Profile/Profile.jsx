import Header from "../../components/Header";
import Subscribe from "../../components/susbscribe";
import useUserProfile from "../../hooks/useUserProfile";
import { useState } from "react";

const Profile = () => {
  const { user, loading, updating, error, setUser, updateProfile } = useUserProfile();
  const [isEditing, setIsEditing] = useState(false); // State to toggle form visibility
  const batches = ["6-7AM", "7-8AM", "8-9AM", "5-6PM"];

  const handleChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateClick = () => {
    setIsEditing(true); // Show the update form when the button is clicked
  };

  const handleSubmit = () => {
    updateProfile(user);
    setIsEditing(false); // Hide the form after submitting
  };

  const handleCloseModal = () => {
    setIsEditing(false); // Close the modal if the backdrop is clicked
  };

  if (loading) return <p className="text-center mt-10">Loading profile...</p>;
//   console.log(user.profilePic);
  return (
    <>
    <Header/>
    <div className="md:px-50 md:p-20 p-5 bg-linear-to-r from-purple-200 to-violet-200 min-h-[90vh]">
      {/* Profile Card */}
      <div className="bg-white/40 rounded-t-lg p-6  backdrop-filter backdrop-blur-lg">
        {/* <h2 className="text-xl font-semibold text-center mb-4">Profile Details</h2> */}

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="space-y-4 flex flex-col md:flex-row items-center text-center md:text-left items-center gap-10">
            <div className="h-50 w-50">
                <img src={user.profilePic} alt="internet slow" />
            </div>
            <div>
                <div className="text-3xl font-bold">
                    {user?.fullName ?? "--"}
                </div>
                <div>
                    {user?.gender ?? "--"}
                </div>
                <div>
                    Age : {user?.age ?? "--"}
                </div>
                <div>
                    Timmings : {user?.batch ?? "--"}
                </div>
                <div>
                    Subscription : {user?.status ?? "--"}
                </div>
                <div>
                    Monthly Fee : {user?.monthlyFeePaid ?? "--"}
                </div>
                <div>
                   Enrollment Date : {user?.enrollmentDate ? new Date(user.enrollmentDate).toLocaleDateString() : "--"}
                </div>
            </div>
        </div>
      </div>


      {user?.status==="Active" ? <p className="w-full mb-10 py-2 px-5 text-white bg-violet-600 hover:bg-purple-700 rounded-b-lg shadow-md text-center ">You have already subscribed to a batch.</p>:
      <div className="mb-10">
      <Subscribe/>
      </div>}
      
      {!isEditing && (
        <div className="text-center">
          <button
            onClick={handleUpdateClick}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            Update Profile
          </button>
        </div>
      )}

      {isEditing && (
        <>
          <div
            onClick={handleCloseModal}
            className="fixed bg-gray-200/10 backdrop-blur inset-0 min-h-screen z-50"
          ></div>
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold text-center mb-4">Update Profile</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={user?.fullName ?? ""}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={user?.age ?? ""}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg shadow-sm p-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className={`w-full text-white py-2 rounded-lg shadow-md ${
                    updating ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                  }`}
                  disabled={updating}
                >
                  {updating ? "Updating..." : "Update Profile"}
                </button>
                <button onClick={() => setIsEditing(false)} className="w-full hover:text-white py-2 rounded-lg shadow-md hover:bg-red-700">
                    Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Profile;

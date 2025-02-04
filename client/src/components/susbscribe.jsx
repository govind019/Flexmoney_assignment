import { useState } from "react";
import { toast } from "react-hot-toast";
import useUserProfile from "../hooks/useUserProfile";

const Subscribe = () => {
  const { user, setUser, updateProfile } = useUserProfile();
  const [showModal, setShowModal] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState("");
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const batches = ["6-7AM", "7-8AM", "8-9AM", "5-6PM"];

  const handleSubscribeClick = () => {
    if (user.status === "Active") {
        toast.error("You have already subscribed to the classes.");
        return;
    }
    setShowModal(true);
  };

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  const handleFakePayment = async () => {
    if (!selectedBatch) {
      toast.error("Please select a batch time.");
      return;
    }

    setIsPaymentProcessing(true);

    // Simulating fake payment processing
    setTimeout(async () => {
      // After fake payment, update the profile
      const updatedData = {
        ...user,
        batch: selectedBatch,
        enrollmentDate: new Date(),
        status: "Active",
      };

      try {
        await updateProfile(updatedData); // Update the profile with the new data
        toast.success("Subscription successful! You are now enrolled in the batch.");
        setShowModal(false);
        setSelectedBatch("");
      } catch (error) {
        toast.error("Failed to complete the subscription.");
      } finally {
        setIsPaymentProcessing(false);
      }
    }, 2000);  // Simulating a 2-second payment processing delay
  };

  return (
    <div className="">
      <button
        onClick={handleSubscribeClick}
        className="w-full py-2 px-5 text-white bg-violet-600 hover:bg-purple-700 rounded-lg shadow-md"
      >
        Subscribe to Yoga Classes
      </button>

      {/* Modal for Batch Selection and Payment */}
      {showModal && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur bg-opacity-50 flex justify-center items-center">
          <div className="bg-white m-5 p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-semibold text-center mb-4">Select Batch and Make Payment</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Batch Timing</label>
                <select
                  value={selectedBatch}
                  onChange={handleBatchChange}
                  className="w-full border-gray-300 rounded-lg shadow-sm p-2"
                >
                  <option value="">Select Batch</option>
                  {batches.map((batch) => (
                    <option key={batch} value={batch}>
                      {batch}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Payment</label>
                <p className="text-gray-900">Fee: ₹500 per month</p>
                <p className="text-gray-500">This is a fake payment simulation.</p>
              </div>

              <button
                onClick={handleFakePayment}
                disabled={isPaymentProcessing}
                className={`w-full py-2 text-white rounded-lg shadow-md ${isPaymentProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
              >
                {isPaymentProcessing ? "Processing..." : "Pay and Subscribe"}
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="w-full py-2  text-gray-700 bg-white hover:bg-red-500 hover:text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscribe;

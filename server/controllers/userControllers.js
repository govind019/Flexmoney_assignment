import User from "../model/user.model.js";

// Fetch a specific user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);  // Fetch user by ID
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);  // Respond with the specific user's data
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Failed to fetch user' });
    }
};


export const updateUser = async(req, res) =>{
  if (req.method === "POST") {
    const updatedData = req.body;
    const userId = req.params.id;
    console.log(updatedData);
    const { fullName, age, batch, enrollmentDate, status } = updatedData;

    // Validation logic
    if (!fullName && !age) {
      return res.status(400).json({ error: "Nothing to update." });
    }

    if (age < 18 || age > 65) {
      return res.status(400).json({ error: "Age must be between 18 and 65 years." });
    }

    try {
        const user = await User.findByIdAndUpdate(
            userId, // assuming userId is part of the request body
            { fullName, age, batch, enrollmentDate, status },
            { new: true } // returns the updated user
          );

      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }

      return res.status(200).json({ message: "Profile updated successfully!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to update profile!!!." });
    }
  } else {
    // Handle invalid methods
    return res.status(405).json({ error: "Method not allowed." });
  }
}

  
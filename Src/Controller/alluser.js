import AllUser from "../Model/alluser.js";

// CREATE a new user
export const createAllUser = async (req, res) => {
  try {
    const newUser = new AllUser(req.body);
    const savedUser = await newUser.save();
    res.status(201).json({ message: "User created", user: savedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET all users
export const getAllAllUser = async (req, res) => {
  try {
    const users = await AllUser.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET a user by name or email
export const getMessagesByAllUser = async (req, res) => {
  try {
    const employee = req.params.employe;
    const user = await AllUser.findOne({
      $or: [{ email: employee }, { name: employee }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE user by name or email
export const updateAllUser = async (req, res) => {
  try {
    const employee = req.params.employe;
    const updatedUser = await AllUser.findOneAndUpdate(
      { $or: [{ email: employee }, { name: employee }] },
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated", user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE user by name or email
export const deleteAllUser = async (req, res) => {
  try {
    const employee = req.params.employe;
    const deletedUser = await AllUser.findOneAndDelete({
      $or: [{ email: employee }, { name: employee }],
    });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted", user: deletedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

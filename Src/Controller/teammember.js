import TeamMember from "../Model/teammember.js";

// Create a new team member (id must be sent by client)
export const createTeamMember = async (req, res) => {
  try {
    const { id, Name, Number, Address } = req.body;

    // Check if Name already exists
    const existing = await TeamMember.findOne({ Name });
    if (existing) {
      return res
        .status(400)
        .json({ message: "Team member with this name already exists." });
    }

    const newMember = new TeamMember({ id, Name, Number, Address });
    await newMember.save();

    res
      .status(201)
      .json({ message: "Team member created successfully", data: newMember });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating team member", error: error.message });
  }
};

// Get all team members
export const getAllTeamMember = async (req, res) => {
  try {
    const members = await TeamMember.find().sort({ createdAt: -1 });
    res.status(200).json({ data: members });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching team members", error: error.message });
  }
};

// Get team member by name
export const getTeamMemberByEmployee = async (req, res) => {
  try {
    const { employe } = req.params;
    const member = await TeamMember.findOne({ Name: employe });

    if (!member) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.status(200).json({ data: member });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching team member", error: error.message });
  }
};

// Update team member by name
export const updateTeamMember = async (req, res) => {
  try {
    const { employe } = req.params;
    const updateData = req.body;

    const updated = await TeamMember.findOneAndUpdate(
      { Name: employe },
      updateData,
      { new: true }
    );

    if (!updated) {
      return res
        .status(404)
        .json({ message: "Team member not found to update" });
    }

    res.status(200).json({ message: "Team member updated", data: updated });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating team member", error: error.message });
  }
};

// Delete team member by name
export const deleteTeamMember = async (req, res) => {
  try {
    const { employe } = req.params;

    const deleted = await TeamMember.findOneAndDelete({ Name: employe });

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Team member not found to delete" });
    }

    res.status(200).json({ message: "Team member deleted", data: deleted });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting team member", error: error.message });
  }
};

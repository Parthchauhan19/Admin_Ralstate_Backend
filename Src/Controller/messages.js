import Messages from "../Model/messages.js";

export const createMessages = async (req, res) => {
  try {
    const data = req.body;

    const newMessage = new Messages({
      ...data,
      CreatedAt: new Date(),
    });

    await newMessage.save();
    res.status(201).json({
      success: true,
      message: "Message created",
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating message",
      error: error.message,
    });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Messages.find();
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching messages",
      error: error.message,
    });
  }
};

export const getMessagesByEmployee = async (req, res) => {
  try {
    const { employe } = req.params;

    const messages = await Messages.find({
      $or: [
        { Title: new RegExp(employe, "i") },
        { UserGroup: new RegExp(employe, "i") },
      ],
    });

    if (!messages.length) {
      return res.status(404).json({
        success: false,
        message: "No messages found for this employee",
      });
    }

    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving messages",
      error: error.message,
    });
  }
};

export const updateMessages = async (req, res) => {
  try {
    const { employe } = req.params;
    const updates = req.body;

    const updated = await Messages.findOneAndUpdate(
      { Title: employe },
      updates,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Message not found for update",
      });
    }

    res.status(200).json({
      success: true,
      message: "Message updated",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating message",
      error: error.message,
    });
  }
};

export const deleteMessages = async (req, res) => {
  try {
    const { employe } = req.params;

    const deleted = await Messages.findOneAndDelete({ Title: employe });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Message not found to delete",
      });
    }

    res.status(200).json({
      success: true,
      message: "Message deleted",
      data: deleted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting message",
      error: error.message,
    });
  }
};

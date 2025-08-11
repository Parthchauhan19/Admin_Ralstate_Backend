import Rental from "../Model/rental.js";

// Get all rentals
export const getRentals = async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.json(rentals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create rental
export const createRental = async (req, res) => {
  try {     
    const rental = new Rental(req.body);
    const savedRental = await rental.save();
    res.status(201).json(savedRental);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update rental
export const updateRental = async (req, res) => {
  try {
    const updatedRental = await Rental.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRental)
      return res.status(404).json({ message: "Rental not found" });
    res.json(updatedRental);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete rental
export const deleteRental = async (req, res) => {
  try {
    const deletedRental = await Rental.findByIdAndDelete(req.params.id);
    if (!deletedRental)
      return res.status(404).json({ message: "Rental not found" });
    res.json({ message: "Rental deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

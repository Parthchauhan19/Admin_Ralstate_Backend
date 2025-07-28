import Property from "../Model/property-models.js";

// Create a new property
export const createProperty = async (req, res) => {
  try {
    const newProperty = new Property(req.body);
    await newProperty.save();
    res
      .status(201)
      .json({ message: "Property created successfully", data: newProperty });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all properties
export const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get property by ID
export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property)
      return res.status(404).json({ message: "Property not found" });
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update property by ID
export const updateProperty = async (req, res) => {
  try {
    const updated = await Property.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated)
      return res.status(404).json({ message: "Property not found" });
    res.status(200).json({ message: "Property updated", data: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete property by ID
export const deleteProperty = async (req, res) => {
  try {
    const deleted = await Property.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Property not found" });
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

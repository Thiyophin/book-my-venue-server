import Venue from "../models/Venue.js";

export const getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.find();

    res.status(200).json({
      success: true,
      count: venues.length,
      venues
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
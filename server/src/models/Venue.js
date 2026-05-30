import mongoose from "mongoose";

const venueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    pricePerHour: {
      type: Number,
      required: true
    },

    image: {
      type: String,
      default: ""
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Venue", venueSchema);
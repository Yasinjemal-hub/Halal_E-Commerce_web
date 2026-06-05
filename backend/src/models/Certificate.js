import mongoose from "mongoose";
const certificateSchema = new mongoose.Schema(
  {
    merchant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Merchant",
      required: true,
    },
    certificateNumber: {
      type: String,
      required: true,
      unique: true,
    },
    issuer: {
      type: String,
      required: true,
    },
    issueDate: {
      type: Date,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    documentUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Certificate", certificateSchema);

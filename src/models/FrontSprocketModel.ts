import mongoose from "mongoose";

const { Schema } = mongoose;

const FrontSprocketSchema = new Schema(
  {
    make: {
      type: String,
      required: [true, "Marca requerida"],
      enum: ["JT Sprockets"],
    },
    code: {
      type: String,
      required: [true, "Código requerida"],
      unique: [true, "Ya existe este código"],
    },
    link: {
      type: String,
    },
    a_innerMinimumDiameter: {
      type: String,
      default: '0',
    },
    b_innerTeeth: {
      type: String,
      default: '0',
    },
    c_innerMaximumDiameter: {
      type: String,
      default: '0',
    },
    d_width: {
      type: String,
      default: '0',
    },
    e_chain: {
      type: String,
      default: '0',
    },
  },
  { timestamps: true }
);

const FrontSprocket =
  mongoose.models.FrontSprocket ||
  mongoose.model("FrontSprocket", FrontSprocketSchema);

export default FrontSprocket;

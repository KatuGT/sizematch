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
    a_innerDiameter: {
      type: Number,
      default: 0,
    },
    b_innerTeeth: {
      type: Number,
      default: 0,
    },
    c_outerDiameter: {
      type: Number,
      default: 0,
    },
    d_width: {
      type: Number,
      default: 0,
    },
    e_chain: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const FrontSprocket =
  mongoose.models.FrontSprocket ||
  mongoose.model("FrontSprocket", FrontSprocketSchema);

export default FrontSprocket;

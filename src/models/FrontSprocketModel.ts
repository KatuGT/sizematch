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
      required: [true, "Código requerido"],
      unique: [true, "Ya existe este código"],
    },
    link: {
      type: String,
    },
    a_innerMinimumDiameter: {
      type: String,
      required: [true, "Medida A"],
    },
    b_innerTeeth: {
      type: String,
      // required: [true, "Medida B"],
      default: "0",
    },
    c_innerMaximumDiameter: {
      type: String,
      required: [true, "Medida C"],
    },
    d_width: {
      type: String,
      // required: [true, "Medida D"],
      default: "0",
    },
    e_chain: {
      type: String,
      required: [true, "Medida E"],
    },
  },
  { timestamps: true }
);

const FrontSprocket =
  mongoose.models.FrontSprocket ||
  mongoose.model("FrontSprocket", FrontSprocketSchema);

export default FrontSprocket;

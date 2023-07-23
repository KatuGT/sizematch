import mongoose from "mongoose";

const { Schema } = mongoose;

const FrontSprocketLargeSchema = new Schema(
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
    b_innerTeethSpacing: {
      type: String,
      required: [true, "Medida B"],
      default: "0",
    },
    c_innerMaximumDiameter: {
      type: String,
      required: [true, "Medida C"],
    },
    d_centerToCenter: {
      type: String,
      // required: [true, "Medida D"],
      default: "0",
    },
    e_width: {
      type: String,
    },
    f_chain: {
      type: String,
      required: [true, "Medida F"],
    },
  },
  { timestamps: true }
);

const FrontSprocketLargeSpline =
  mongoose.models.FrontSprocketLargeSpline ||
  mongoose.model("FrontSprocketLargeSpline", FrontSprocketLargeSchema);

export default FrontSprocketLargeSpline;

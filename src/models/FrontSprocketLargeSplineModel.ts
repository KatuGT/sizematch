import mongoose from "mongoose";

const { Schema } = mongoose;

const FrontSprocketLargeSchema = new Schema(
  {
    make: {
      type: String,
      required: [true, "Marca requerida"],
      enum: ["JT Sprockets"],
      trim: true,
    },
    code: {
      type: String,
      required: [true, "Código requerido"],
      unique: [true, "Ya existe este código"],
    },
    link: {
      type: String,
      trim: true,
    },
    a_innerMinimumDiameter: {
      type: String,
      required: [true, "Medida A"],
      trim: true,
    },
    b_innerTeethSpacing: {
      type: String,
      required: [true, "Medida B"],
      trim: true,
      default: "0",
    },
    c_innerMaximumDiameter: {
      type: String,
      required: [true, "Medida C"],
      trim: true,
    },
    d_innerTeethNumber: {
      type: String,
      required: [true, "Medida D"],
      trim: true,
    },
    e_centerToCenter: {
      type: String,
      required: [true, "Medida E"],
      trim: true,
    },
    f_width: {
      type: String,
    },
    g_chain: {
      type: String,
      required: [true, "Medida G"],
      trim: true,
    },
  },
  { timestamps: true }
);

const FrontSprocketLargeSpline =
  mongoose.models.FrontSprocketLargeSpline ||
  mongoose.model("FrontSprocketLargeSpline", FrontSprocketLargeSchema);

export default FrontSprocketLargeSpline;

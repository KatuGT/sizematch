import mongoose from "mongoose";

const { Schema } = mongoose;

const RearSprocketSchema = new Schema(
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
    a_holeDiameter: {
      type: String,
      required: [true, "Medida A"],
      trim: true,
    },
    b_numberOfHoles: {
      type: String,
      required: [true, "Medida B"],
      default: "0",
      trim: true,
    },
    c_holeDistance: {
      type: String,
      required: [true, "Medida C"],
      trim: true,
    },
    d_center: {
      type: String,
      required: [true, "Medida D"],
      trim: true,
      default: "0",
    },
    e_chain: {
      type: String,
      required: [true, "Medida E"],
      trim: true,
    },
  },
  { timestamps: true }
);

const RearSprocket =
  mongoose.models.RearSprocket ||
  mongoose.model("RearSprocket", RearSprocketSchema);

export default RearSprocket;

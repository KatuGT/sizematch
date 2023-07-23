import mongoose from "mongoose";

const { Schema } = mongoose;

const RearSprocketSchema = new Schema(
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
    a_holeDiameter: {
      type: String,
      required: [true, "Medida A"],
    },
    b_numberOfHoles: {
      type: String,
      required: [true, "Medida B"],
      default: "0",
    },
    c_holeDistance: {
      type: String,
      required: [true, "Medida C"],
    },
    d_center: {
      type: String,
      required: [true, "Medida D"],
      default: "0",
    },
    e_chain: {
      type: String,
      required: [true, "Medida E"],
    },
  },
  { timestamps: true }
);

const RearSprocket =
  mongoose.models.RearSprocket ||
  mongoose.model("RearSprocket", RearSprocketSchema);

export default RearSprocket;

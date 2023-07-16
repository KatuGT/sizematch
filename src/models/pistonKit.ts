import mongoose from "mongoose";

const { Schema } = mongoose;

const PistonKitSchema = new Schema(
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
    a_compressionHight1: {
      type: String,
      required: [true, "Medida A"],
    },
    b_pinDiameter: {
      type: String,
      required: [true, "Medida B"],
      default: "0",
    },
    c_compressionHight2: {
      type: String,
    },
    d_bore: {
      type: String,
      required: [true, "Medida D"],
      default: "0",
    },
    e_length: {
      type: String,
      required: [true, "Medida E"],
    },
    f_pinLength: {
      type: String,
      required: [true, "Medida F"],
    },
    g_stroke: {
      type: String,
      required: [true, "Medida G"],
    },
  },
  { timestamps: true }
);

const PistonKit =
  mongoose.models.PistonKit || mongoose.model("PistonKit", PistonKitSchema);

export default PistonKit;

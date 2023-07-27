import mongoose from "mongoose";

const { Schema } = mongoose;

const PistonKitSchema = new Schema(
  {
    make: {
      type: String,
      required: [true, "Marca requerida"],
      enum: ["TKRJ"],
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
    a_compressionHight1: {
      type: String,
      required: [true, "Medida A"],
      trim: true,
    },
    b_pinDiameter: {
      type: String,
      required: [true, "Medida B"],
      trim: true,
      default: "0",
    },
    c_compressionHight2: {
      type: String,
      trim: true,
    },
    d_bore: {
      type: String,
      required: [true, "Medida D"],
      trim: true,
      default: "0",
    },
    e_length: {
      type: String,
      required: [true, "Medida E"],
      trim: true,
    },
    f_pinLength: {
      type: String,
      required: [true, "Medida F"],
      trim: true,
    },
    g_stroke: {
      type: String,
      enum: ["2", "4"],
      required: [true, "Medida G"],
      trim: true,
    },
  },
  { timestamps: true }
);

const PistonKit =
  mongoose.models.PistonKit || mongoose.model("PistonKit", PistonKitSchema);

export default PistonKit;

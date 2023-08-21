import mongoose from "mongoose";

const { Schema } = mongoose;

const BrakeDiscSchema = new Schema(
  {
    make: {
      type: String,
      required: [true, "Marca requerida"],
      enum: ["Brembo", "Moto-Master"],
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
    a_discDiameter: {
      type: String,
      required: [true, "Medida A"],
      trim: true,
    },
    b_holeDiameter: {
      type: String,
      required: [true, "Medida B"],
      trim: true,
    },
    c_numberOfHoles: {
      type: String,
      required: [true, "Medida C"],
      trim: true,
    },
    d_center: {
      type: String,
      required: [true, "Medida D"],
      trim: true,
    },
    e_holeDistance: {
      type: String,
      required: [true, "Medida E"],
      trim: true,
    },
    f_width: {
      type: String,
      required: [true, "Medida F"],
      trim: true,
    },
  },
  { timestamps: true }
);

const BrakeDisc =
  mongoose.models.BrakeDisc || mongoose.model("BrakeDisc", BrakeDiscSchema);

export default BrakeDisc;

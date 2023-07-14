import mongoose from "mongoose";

const { Schema } = mongoose;

const BrakeDiscSchema = new Schema(
  {
    make: {
      type: String,
      required: [true, "Marca requerida"],
      enum: ["Brembo"],
    },
    code: {
      type: String,
      required: [true, "Código requerido"],
      unique: [true, "Ya existe este código"],
    },
    link: {
      type: String,
    },
    a_discDiameter: {
      type: String,
      required: [true, "Medida A"],
    },
    b_holeDiameter: {
      type: String,
      required: [true, "Medida B"],
    },
    c_numberOfHoles: {
      type: String,
      required: [true, "Medida C"],
    },
    d_center: {
      type: String,
      required: [true, "Medida D"],
    },
    e_holeDistance: {
      type: String,
      required: [true, "Medida E"],
    },
    f_width: {
      type: String,
      required: [true, "Medida F"],
    },
  },
  { timestamps: true }
);

const BrakeDisc =
  mongoose.models.BrakeDisc ||
  mongoose.model("BrakeDisc", BrakeDiscSchema);

export default BrakeDisc;

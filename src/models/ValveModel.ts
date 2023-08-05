import mongoose from "mongoose";

const { Schema } = mongoose;

const ValveSchema = new Schema(
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
    a_stemDiameter: {
      type: String,
      required: [true, "Medida A"],
      trim: true,
    },
    b_totalLength: {
      type: String,
      required: [true, "Medida B"],
      trim: true,
    },
    c_head: {
      type: String,
      required: [true, "Medida C"],
      trim: true,
    },
    d_type: {
      type: String,
      required: [true, "Medida D"],
      enum: ["IN", "EX"],
      trim: true,
    },
  },
  { timestamps: true }
);

const Valve = mongoose.models.Valve || mongoose.model("Valve", ValveSchema);

export default Valve;

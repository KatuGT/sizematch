import mongoose from "mongoose";

const { Schema } = mongoose;

const ValveSchema = new Schema(
  {
    make: {
      type: String,
      required: [true, "Marca requerida"],
      enum: ["TKRJ"],
    },
    code: {
      type: String,
      required: [true, "Código requerido"],
      unique: [true, "Ya existe este código"],
    },
    link: {
      type: String,
    },
    a_stemDiameter: {
      type: String,
      required: [true, "Medida A"],
    },
    b_totalLength: {
      type: String,
      required: [true, "Medida B"],
    },
    c_head: {
      type: String,
      required: [true, "Medida C"],
    },
  },
  { timestamps: true }
);

const Valve = mongoose.models.Valve || mongoose.model("Valve", ValveSchema);

export default Valve;

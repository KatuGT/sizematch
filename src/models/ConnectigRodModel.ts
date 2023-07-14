import mongoose from "mongoose";

const { Schema } = mongoose;

const ConnectingRodSchema = new Schema(
  {
    make: {
      type: String,
      required: [true, "Marca requerida"],
      enum: ["TKRJ", "PROX RACING PARTS"],
    },
    code: {
      type: String,
      required: [true, "Código requerido"],
      unique: [true, "Ya existe este código"],
    },
    link: {
      type: String,
    },
    a_bigEnd: {
      type: String,
      required: [true, "Medida A"],
    },
    b_smallEnd: {
      type: String,
      required: [true, "Medida B"],
    },
    c_centerToCenter: {
      type: String,
      required: [true, "Medida C"],
    },
    d_totalLength: {
      type: String,
      required: [true, "Medida D"],
    },
    e_widthBigEnd: {
      type: String,
      required: [true, "Medida E"],
    },
    f_widthSmallEnd: {
      type: String,
      required: [true, "Medida F"],
    },
    g_eyeToEyeCenter: {
      type: String,
    },
    h_bigEndPinDiameter: {
      type: String,
      required: [true, "Medida H"],
    },
    i_bigEndPinLength: {
      type: String,
      required: [true, "Medida I"],
    },
  },
  { timestamps: true }
);

const ConnectingRod =
  mongoose.models.ConnectingRod ||
  mongoose.model("ConnectingRod", ConnectingRodSchema);

export default ConnectingRod;

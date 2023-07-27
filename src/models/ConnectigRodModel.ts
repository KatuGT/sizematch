import mongoose from "mongoose";

const { Schema } = mongoose;

const ConnectingRodSchema = new Schema(
  {
    make: {
      type: String,
      required: [true, "Marca requerida"],
      enum: ["TKRJ", "PROX RACING PARTS", "HOT RODS"],
      trim: true,
    },
    code: {
      type: String,
      required: [true, "Código requerido"],
      unique: [true, "Ya existe este código"],
    },
    link: {
      type: String,
      trim: true
    },
    a_bigEnd: {
      type: String,
      required: [true, "Medida A"],
      trim: true,
    },
    b_smallEnd: {
      type: String,
      required: [true, "Medida B"],
      trim: true,
    },
    c_centerToCenter: {
      type: String,
      required: [true, "Medida C"],
      trim: true,
    },
    d_totalLength: {
      type: String,
      required: [true, "Medida D"],
      trim: true,
    },
    e_widthBigEnd: {
      type: String,
      required: [true, "Medida E"],
      trim: true,
    },
    f_widthSmallEnd: {
      type: String,
      required: [true, "Medida F"],
      trim: true,
    },
    g_eyeToEyeCenter: {
      type: String,
    },
    h_bigEndPinDiameter: {
      type: String,
      required: [true, "Medida H"],
      trim: true,
    },
    i_bigEndPinLength: {
      type: String,
      required: [true, "Medida I"],
      trim: true,
    },
  },
  { timestamps: true }
);

const ConnectingRod =
  mongoose.models.ConnectingRod ||
  mongoose.model("ConnectingRod", ConnectingRodSchema);

export default ConnectingRod;

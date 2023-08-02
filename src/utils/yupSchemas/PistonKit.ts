import * as yup from "yup";

export const pistonKitSchema = {
  a_compressionHight1: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value")
    .required("Required"),
  b_pinDiameter: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(5, "Enter a valid value")
    .required("Required"),
  c_compressionHight2: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value"),
  d_bore: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(5, "Enter a valid value"),
  e_length: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(5, "Enter a valid value")
    .required("Required"),
  f_pinLength: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(5, "Enter a valid value")
    .required("Required"),
  g_stroke: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(2, "Enter a valid value")
    .required("Required"),
};

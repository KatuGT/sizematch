import * as yup from "yup";

export const frontSprocketNarrowSplineSchema = {
  a_innerMinimumDiameter: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value")
    .required("Required"),
  b_innerTeethNumber: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(2, "Enter a valid value")
    .required("Required"),
  c_innerMaximumDiameter: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value")
    .required("Required"),
  d_width: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(4, "Enter a valid value"),
  e_chain: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(3, "Enter a valid value")
    .required("Required"),
};

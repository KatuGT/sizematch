import * as yup from "yup";

export const rearSprocketSchema = {
  a_holeDiameter: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value")
    .required("Required"),
  b_numberOfHoles: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(2, "Enter a valid value")
    .required("Required"),
  c_holeDistance: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value")
    .required("Required"),
  d_center: yup
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

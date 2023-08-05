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
    .test(
      "is-greater-than-a_innerMinimumDiameter",
      "'C-inner Maximum Diameter' must be greater than 'A-Inner Minimum Diameter'",
      function (value) {
        const c_innerMaximumDiameter = value ? parseFloat(value) : undefined;
        const a_innerMinimumDiameter = this.parent.a_innerMinimumDiameter
          ? parseFloat(this.parent.a_innerMinimumDiameter)
          : undefined;
        return c_innerMaximumDiameter && a_innerMinimumDiameter
          ? c_innerMaximumDiameter > a_innerMinimumDiameter
          : true;
      }
    )
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

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
    .max(6, "Enter a valid value")
    .test(
      "is-smallest-than-c-holeDistance",
      "'D-Center'  must be smallest than 'C-Hole Distance'",
      function (value) {
        const d_center = value ? parseFloat(value) : undefined;
        const c_holeDistance = this.parent.c_holeDistance
          ? parseFloat(this.parent.c_holeDistance)
          : undefined;
        return c_holeDistance && d_center ? d_center < c_holeDistance : true;
      }
    )
    .required("Required"),
  e_chain: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(3, "Enter a valid value")
    .required("Required"),
};

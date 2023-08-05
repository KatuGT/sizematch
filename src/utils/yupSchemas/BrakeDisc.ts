import * as yup from "yup";

export const brakeDiscSchema = {
  a_discDiameter: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value")
    .required("Required"),
  b_holeDiameter: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(4, "Enter a valid value")
    .required("Required"),
  c_numberOfHoles: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value")
    .required("Required"),
  d_center: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value"),
  e_holeDistance: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value")
    .test(
      "is-greater-than-d_center",
      "'E-Hole Distance' must be greater than 'D-Center'",
      function (value) {
        const e_holeDistance = value ? parseFloat(value) : undefined;
        const d_center = this.parent.d_center
          ? parseFloat(this.parent.d_center)
          : undefined;
        return e_holeDistance && d_center ? e_holeDistance > d_center : true;
      }
    )
    .required("Required"),
  f_width: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(3, "Enter a valid value")
    .required("Required"),
};

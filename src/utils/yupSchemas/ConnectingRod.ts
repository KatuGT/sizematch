import * as yup from "yup";

export const connectingRodSchema = {
  a_bigEnd: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value")
    .test(
      "is-greater-than-b_smallEnd",
      "'A-Big end' must be greater than 'B-Small end'",
      function (value) {
        const a_bigEnd = value ? parseFloat(value) : undefined;
        const b_smallEnd = this.parent.b_smallEnd
          ? parseFloat(this.parent.b_smallEnd)
          : undefined;
        return a_bigEnd && b_smallEnd ? a_bigEnd > b_smallEnd : true;
      }
    )
    .required("Required"),
  b_smallEnd: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value")
    .test(
      "is-smallest-than-a_bigEnd",
      "'B-Small end'  must be smallest than 'A-Big end'",
      function (value) {
        const b_smallEnd = value ? parseFloat(value) : undefined;
        const a_bigEnd = this.parent.a_bigEnd
          ? parseFloat(this.parent.a_bigEnd)
          : undefined;
        return a_bigEnd && b_smallEnd ? b_smallEnd < a_bigEnd : true;
      }
    )
    .required("Required"),
  c_centerToCenter: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value")
    .test(
      "is-greater-than-d_totalLength",
      "'C-Center To Center' must be smallest than 'D-Total Length'",
      function (value) {
        const c_centerToCenter = value ? parseFloat(value) : undefined;
        const d_totalLength = this.parent.d_totalLength
          ? parseFloat(this.parent.d_totalLength)
          : undefined;
        return c_centerToCenter && d_totalLength
          ? d_totalLength > c_centerToCenter
          : true;
      }
    )
    .required("Required"),
  d_totalLength: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()    
    .max(6, "Enter a valid value"),
  e_widthBigEnd: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(5, "Enter a valid value")
    .required("Required"),
  f_widthSmallEnd: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(5, "Enter a valid value")
    .required("Required"),
  g_eyeToEyeCenter: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(6, "Enter a valid value")
    .required("Required"),
  h_bigEndPinDiameter: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(5, "Enter a valid value")
    .required("Required"),
  i_bigEndPinLength: yup
    .string()
    .matches(/^\d*\.?\d+$/, "Invalid number")
    .trim()
    .max(5, "Enter a valid value")
    .required("Required"),
};

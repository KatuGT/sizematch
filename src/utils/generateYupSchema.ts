import * as yup from "yup";

const commonSchema = {
  make: yup.string().trim().max(20, "Too long").required("Required"),
  code: yup.string().trim().max(20, "Too long").required("Required"),
  link: yup.string().trim().max(150, "Too long").url().required("Required"),
};

export const generateSchema = (additionalSchema: any) => {
  return yup.object().shape({
    ...commonSchema,
    ...additionalSchema,
  });
};

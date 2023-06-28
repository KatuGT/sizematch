// Input needed for the POST form for Front Sprockets

export type FrontSprocketType = {
  a_innerMinimumDiameter: string;
  b_innerTeeth: string;
  c_innerMaximumDiameter: string;
  d_width: string;
  e_chain: string;
};

export type InputItemFS = {
  label: string;
  inputName: keyof FrontSprocketType;
  placeholder: string;
  className: string;
};
export const FSSizeInput: InputItemFS[] = [
  {
    label: "A - Inner minimum diameter ",
    inputName: "a_innerMinimumDiameter",
    placeholder: "15.20",
    className: "sizeA",
  },
  {
    label: "B - Inner teeth  amount",
    inputName: "b_innerTeeth",
    placeholder: "12",
    className: "sizeB",
  },
  {
    label: "C - Inner maximum diameter ",
    inputName: "c_innerMaximumDiameter",
    placeholder: "20.50",
    className: "sizeC",
  },
  {
    label: "D - Width ",
    inputName: "d_width",
    placeholder: "8.5",
    className: "sizeD",
  },
  {
    label: "E - Chain ",
    inputName: "e_chain",
    placeholder: "520",
    className: "sizeE",
  },
];

export interface FSNarrowSplinesizeProps {
  a_innerMinimumDiameter?: string;
  b_innerTeethNumber?: string;
  c_innerMaximumDiameter?: string;
  d_width?: string;
  e_chain?: string;
}

export interface SearchResultFSNarrowSpline {
  _id: string;
  make: string;
  code: string;
  link: string;
  a_innerMinimumDiameter: string;
  b_innerTeethNumber: string;
  c_innerMaximumDiameter: string;
  d_width: string;
  e_chain: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

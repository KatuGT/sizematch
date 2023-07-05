export interface FSlargeSplinesizeProps {
  a_innerMinimumDiameter?: string;
  b_innerTeethSpacing?: string;
  c_innerMaximumDiameter?: string;
  d_centerToCenter?: string;
  e_chain?: string;
  f_chain?: string;
}

export interface SearchResult {
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

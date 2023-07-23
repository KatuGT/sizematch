export interface BrakeDiscsizeProps {
  a_discDiameter: string;
  b_holeDiameter: string;
  c_numberOfHoles: string;
  d_center: string;
  e_holeDistance: string;
  f_width: string;
}

export interface SearchResultBrakeDisc {
  _id: string;
  make: string;
  code: string;
  link: string;
  a_discDiameter: string;
  b_holeDiameter: string;
  c_numberOfHoles: string;
  d_center: string;
  e_holeDistance: string;
  f_width: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

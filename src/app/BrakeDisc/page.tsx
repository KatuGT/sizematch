import React from "react";
import { Metadata } from "next";
import BrakeDiscSearcher from "./BrakeDiscSearcher";

export const metadata: Metadata = {
  title: "Size Match - Brake Disc",
  description: "Find the perfect fit for your brake disc.",
};

const BrakeDisc = () => {
  return (
    <div>
      <BrakeDiscSearcher />
    </div>
  );
};

export default BrakeDisc;

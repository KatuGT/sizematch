import { Metadata } from "next";
import RearSprocketSearcher from "./RearSprocketSearcher";

export const metadata: Metadata = {
  title: "Size Match - Rear Sprocket",
  description: "Find the perfect fit for your rear sprocket",
};

const RearSprocket = () => {
  return (
      <RearSprocketSearcher />
  );
};

export default RearSprocket;

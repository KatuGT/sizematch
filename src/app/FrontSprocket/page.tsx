import { Metadata } from "next";
import FrontSprocketSearcher from "./FrontSprocketSearcher";

export const metadata: Metadata = {
  title: "Size Match - Front Sprockets",
  description: "Find the perfect fit for your front sprocket.",
};

const FrontSprocket = () => {
  return <FrontSprocketSearcher />;
};

export default FrontSprocket;

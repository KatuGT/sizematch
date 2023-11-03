import { Metadata } from "next";
import FrontSprocketSearcher from "./FrontSprocketSearcher";

export const metadata: Metadata = {
  title: "Size Match - Front Sprockets",
  description: "Find the perfect fit for your front sprocket.",
  alternates: {
    canonical: 'FrontSprocket',
    languages: {
      'en-US': '/en-US/FrontSprocket',
      'es-ES': '/es-ES/FrontSprocket',
    },
  },
};

const FrontSprocket = () => {
  return <FrontSprocketSearcher />;
};

export default FrontSprocket;

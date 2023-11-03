import { Metadata } from "next";
import RearSprocketSearcher from "./RearSprocketSearcher";

export const metadata: Metadata = {
  title: "Size Match - Rear Sprocket",
  description: "Find the perfect fit for your rear sprocket",
  alternates: {
    canonical: 'RearSprocket',
    languages: {
      'en-US': '/en-US/RearSprocket',
      'es-ES': '/en-US/RearSprocket',
    },
  },
};

const RearSprocket = () => {
  return (
      <RearSprocketSearcher />
  );
};

export default RearSprocket;

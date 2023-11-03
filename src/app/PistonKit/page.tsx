import { Metadata } from "next";
import PistonKitSearcher from "./PistonKitSearcher";

export const metadata: Metadata = {
  title: "Size Match - Piston Kit",
  description: "Find the perfect fit for your piston kit.",
  alternates: {
    canonical: 'PistonKit',
    languages: {
      'en-US': '/en-US/PistonKit',
      'es-ES': '/es-ES/PistonKit',
    },
  },
};

const PistonKit = () => {
  return <PistonKitSearcher />;
};

export default PistonKit;

import { Metadata } from "next";
import PistonKitSearcher from "./PistonKitSearcher";

export const metadata: Metadata = {
  title: "Size Match - Piston Kit",
  description: "Find the perfect fit for your piston kit.",
};

const PistonKit = () => {
  return <PistonKitSearcher />;
};

export default PistonKit;

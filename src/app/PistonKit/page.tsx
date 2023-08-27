import { Metadata } from "next";
import PistonKitSearcher from "./PistonKitSearcher";

export const metadata: Metadata = {
  title: "Size Match - Piston Kit",
  description: "Find the perfect fit for your piston kit.",
  metadataBase: new URL('https://www.sizematch.net/'),
  alternates: {
    canonical: 'PistonKit',
    languages: {
      'en-US': '/en-US',
    },
  },
};

const PistonKit = () => {
  return <PistonKitSearcher />;
};

export default PistonKit;

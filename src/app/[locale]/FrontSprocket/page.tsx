import { Metadata } from "next";
import FrontSprocketSearcher from "./FrontSprocketSearcher";

export const metadata: Metadata = {
  title: "Size Match - Front Sprockets",
  description: "Find the perfect fit for your front sprocket.",
  metadataBase: new URL('https://www.sizematch.net/'),
  alternates: {
    canonical: 'FrontSprocket',
    languages: {
      'en-US': '/en-US',
    },
  },
};

const FrontSprocket = () => {
  return <FrontSprocketSearcher />;
};

export default FrontSprocket;

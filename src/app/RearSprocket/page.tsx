import { Metadata } from "next";
import RearSprocketSearcher from "./RearSprocketSearcher";

export const metadata: Metadata = {
  title: "Size Match - Rear Sprocket",
  description: "Find the perfect fit for your rear sprocket",
  metadataBase: new URL('https://www.sizematch.net/'),
  alternates: {
    canonical: 'RearSprocket',
    languages: {
      'en-US': '/en-US',
    },
  },
};

const RearSprocket = () => {
  return (
      <RearSprocketSearcher />
  );
};

export default RearSprocket;

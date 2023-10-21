import { Metadata } from "next";
import ConnectingRodSearcher from "./ConnectingRodSearcher";

export const metadata: Metadata = {
  title: "Size Match - Connecting rods",
  description: "Find the perfect fit for you connecting rod",
  metadataBase: new URL('https://www.sizematch.net/'),
  alternates: {
    canonical: 'ConnectingRods',
    languages: {
      'en-US': '/en-US',
    },
  },
};

const ConnectingRods = () => {
  return <ConnectingRodSearcher />;
};

export default ConnectingRods;

import { Metadata } from "next";
import ConnectingRodSearcher from "./ConnectingRodSearcher";

export const metadata: Metadata = {
  title: "Size Match - Connecting rods",
  description: "Find the perfect fit for you connecting rod",
  alternates: {
    canonical: 'ConnectingRods',
    languages: {
      'en-US': '/en-US/ConnectingRods',
      'es-ES': '/es/ES/ConnectingRods',
    },
  },
};

const ConnectingRods = () => {
  return <ConnectingRodSearcher />;
};

export default ConnectingRods;

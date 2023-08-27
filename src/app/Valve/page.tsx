import { Metadata } from "next";
import ValveSearcher from "./ValveSearcher";

export const metadata: Metadata = {
  title: "Size Match - Rear Sprocket",
  description: "Find the perfect fit for your valves",
  metadataBase: new URL("https://www.sizematch.net/"),
  alternates: {
    canonical: "Valve",
    languages: {
      "en-US": "/en-US",
    },
  },
};
const Valve = () => {
  return <ValveSearcher />;
};

export default Valve;

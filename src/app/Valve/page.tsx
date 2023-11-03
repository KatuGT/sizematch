import { Metadata } from "next";
import ValveSearcher from "./ValveSearcher";

export const metadata: Metadata = {
  title: "Size Match - Rear Sprocket",
  description: "Find the perfect fit for your valves",
  alternates: {
    canonical: "Valve",
    languages: {
      "en-US": "/en-US/Valve",
      "es-ES": "/es-ES/Valve",
    },
  },
};
const Valve = () => {
  return <ValveSearcher />;
};

export default Valve;

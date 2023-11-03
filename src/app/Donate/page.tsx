import React from "react";
import DonateForm from "./DonateForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Match - Donate please",
  description:
    "If want to say 'Thank you' with a donation, that would be wonderful ",
  alternates: {
    canonical: "Donate",
    languages: {
      "en-US": "/en-US/Donate",
      "es-ES": "/es-ES/Donate",
    },
  },
};

const Donate = () => {
  return (
    <div className="mx-auto grid  max-w-xl place-items-center gap-3 p-4 text-center text-white">
      <div>
        <h2 className="text-3xl">Thank you!</h2>
        <p>
          If you are here, you are probably considering making a donation, and
          that would be wonderful!
        </p>
        <p>
          If this website is useful for you, and by pure coincidence, you have a
          few extra cents in your account, you could use the button below. 😉
        </p>
      </div>
      <DonateForm />
      <p>I promise I will keep making it grow as much as it can.</p>
    </div>
  );
};

export default Donate;

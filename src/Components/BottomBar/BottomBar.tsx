"use client";
import Link from "next/link";

const BottomBar = () => {
  return (
    <footer className="flex flex-col items-center justify-center laptop:flex-row laptop:gap-16 laptop:text-left bg-black px-4 py-2 text-white text-center">
      <div className="flex flex-col laptop:gap-2">
        <Link href="/PrivacyPolicy">Privacy Policy</Link>
        <Link href="/TermsAndConditions">Terms & Conditions</Link>
        <Link href="/Contact">Contact</Link>
      </div>
      <div className="flex flex-col laptop:gap-2">
        <Link href="/BrakeDisc">Brake Discs</Link>
        <Link href="/ConnectingRods">Connecting Rods</Link>
        <Link href="/FrontSprocket">Front Sprockets</Link>
      </div>
      <div className="flex flex-col laptop:gap-2">
        <Link href="/RearSprocket">Rear Sprockets</Link>
        <Link href="/PistonKit">Piston Kit</Link>
        <Link href="/Valve">Valves</Link>
      </div>
    </footer>
  );
};

export default BottomBar;

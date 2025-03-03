"use client";
import Link from "next/link";

const BottomBar = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-black  p-4 text-center text-white laptop:flex-row laptop:items-start laptop:gap-16 laptop:text-left">
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
      <div className="flex flex-col laptop:gap-2">
        <Link href="/PrivacyPolicy">Privacy Policy</Link>
        <Link href="/TermsAndConditions">Terms & Conditions</Link>
      </div>
    </footer>
  );
};

export default BottomBar;

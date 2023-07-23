"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();
  return (
    <footer className="flex justify-center bg-black px-4 py-2 text-white">
      <div className="flex flex-col gap-2">
        <Link href="/PrivacyPolicy">Privacy Policy</Link>
        <Link href="/TermsAndConditions">Terms & Conditions</Link>
        <Link href="/Contact">Contact</Link>
      </div>
    </footer>
  );
};

export default BottomBar;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();
;

  return (
    <footer className="flex h-[80px] justify-center bg-black text-white py-2 px-4">
      <Link href='/PrivacyPolicy'>Privacy Policy</Link>
      <Link href='/TermsAndConditions'>Terms & Conditions</Link>
    </footer>
  );
};

export default BottomBar;

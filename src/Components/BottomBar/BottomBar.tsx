"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();
;

  return (
    <nav className="flex h-[80px] justify-center bg-black px-2">
      
    </nav>
  );
};

export default BottomBar;

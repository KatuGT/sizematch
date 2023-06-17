"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SizeMatchLogoBlanco from "../../../public/sizeMatchLogoBlanco.png";

const Topbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex h-[80px] justify-center bg-black px-2">
      <div className="flex max-w-[80%] items-center justify-center gap-5">
        <Link
          href="/News"
          className="after:hoverUnderline relative flex h-full flex-1 items-center justify-center text-center text-white after:hover:opacity-100"
        >
          News
          {pathname === "/News" && (
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-white bg-gradient-radial"></span>
          )}
        </Link>
        <Link href="/" className="relative h-[50px] w-[200px] flex-1">
          <Image
            src={SizeMatchLogoBlanco}
            fill={true}
            alt="Logo SizeMatch"
            className="object-contain"
          />
        </Link>
        <Link
          href="/Contact"
          className="after:hoverUnderline relative flex h-full flex-1 items-center justify-center text-center text-white after:hover:opacity-100"
        >
          Contact Us
          {pathname === "/Contact" && (
            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-white bg-gradient-radial  "></span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Topbar;

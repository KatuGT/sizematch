"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SizeMatchLogoBlanco from "../../../public/sizeMatchLogoBlanco.png";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

type PartsTypes = {
  text: string;
  url: string;
};

const partsRoutes: PartsTypes[] = [
  {
    text: "Brake Discs",
    url: "/BrakeDisc",
  },

  {
    text: "Connecting Rods",
    url: "/ConnectingRods",
  },
  {
    text: "Front Sprockets",
    url: "/FrontSprocket",
  },
  {
    text: "Rear Sprockets",
    url: "/RearSprocket",
  },

  {
    text: "Piston kit",
    url: "/PistonKit",
  },
  {
    text: "Valves",
    url: "/Valve",
  },
];

const Topbar = () => {
  const [toggle, setToggle] = useState(false);

  const pathname = usePathname();
  return (
    <nav className="flex items-center bg-black px-2 pb-3 pt-3 mobile:py-0">
      <div className="flex h-full w-full flex-wrap items-center justify-between mobile:flex-nowrap mobile:gap-5">
        <Link href="/" className="relative h-[50px] w-[130px]">
          <Image
            src={SizeMatchLogoBlanco}
            fill={true}
            sizes="50"
            alt="Logo SizeMatch"
            className="object-contain"
            priority
          />
        </Link>
        <div
          className="cursor-pointer mobile:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <RiMenu3Fill color="#fff" size={30} />
        </div>
        <div
          className={`w-full bg-black pt-2 mobile:top-0 mobile:h-full mobile:pt-0 ${
            !toggle ? "hidden" : "flex"
          } mobile:flex`}
        >
          <ul className="flex w-full flex-col items-stretch mobile:flex-row">
            {partsRoutes.map((item) => {
              const activeLink = pathname === item.url;
              return (
                <li key={item.url} className="flex-1">
                  <Link
                    href={item.url}
                    className="after:hoverUnderline relative flex h-full flex-1 items-center justify-center py-6 text-center text-white after:hover:opacity-100  "
                  >
                    {item.text}
                    {activeLink && (
                      <span className="absolute bottom-0 left-0 h-[3px] w-full bg-white"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;

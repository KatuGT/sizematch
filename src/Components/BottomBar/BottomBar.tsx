"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();

  type PartsTypes = {
    text: string;
    url: string;
  };

  const partsRoutes: PartsTypes[] = [
    {
      text: "Break Discs",
      url: "/Breakdisc",
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

  return (
    <nav className="flex h-[80px] justify-center bg-black px-2">
      {partsRoutes.map((item) => {
        const activeLink = pathname === item.url
        return (
          <Link key={item.url}
            href={item.url}
            className="after:hoverUppererline relative flex h-full flex-1 items-center justify-center text-center text-white after:hover:opacity-100"
          >
            {item.text}
            {activeLink && (
              <span className="absolute left-0 top-0 h-[3px] w-full bg-white bg-gradient-radial"></span>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomBar;

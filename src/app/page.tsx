import Image from "next/image";
import LinealParts from "./../../public/landingImg/tool.webp";
import PartCounter from "@/Components/PartCounter/PartCounter";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
 
export default function Home() {

  return (
    <main className="bg-gray-950 text-gray-300">
      <div
        className="bg-hero-image relative h-screen w-full bg-[url('../../public/PortadaHome.webp')] bg-cover  bg-fixed bg-center
      p-5 text-6xl text-gray-800 laptop:h-[600px] laptop:bg-left-bottom"
      >
        <div className="max-w-2xl backdrop-blur ">
          <h2 className="top-1/3 mb-2 text-8xl font-bold mix-blend-screen">
            Find Your Perfect Fit
          </h2>
          <p> Input the size</p>
          <p> Discover the code</p>
          <p className="text-xl"> Get the Right Spare Part Hassle-Free.</p>
        </div>
      </div>
      <div className="bg-gray-950 text-white">
        <div className="p-8 text-center">
          <h3 className="text-5xl font-bold">
            Calling All Motorcycle Enthusiasts!
          </h3>
          <p className="mx-auto max-w-2xl py-4 text-center text-xl font-thin text-gray-200">
            Are you tired of the endless hunt for those elusive motorcycle spare
            parts? Say goodbye to frustration and hello to efficiency!
            We&apos;ve engineered this tool with one mission:{" "}
            <span className="font-normal">
              to put the control back in your hands.
            </span>
          </p>
        </div>
        <div className="flex flex-col  laptop:flex-row items-center justify-around py-8">
          <article className="max-w-3xl p-8 flex-1 desktop:flex-none">
            <h3 className="max-w-xl text-5xl font-semibold">
              Introducing Our Part Finder: Your Motorcycle&apos;s Best Friend
            </h3>
            <p className="font-thin">
              Unlock a World of Possibilities with 1900+ parts at your
              fingertips. Imagine finding that perfect front sprocket, rear
              sprocket, valve, piston kit, connecting rod, or brake disc with
              ease. Your ride deserves the best, and now you have the tool to
              make it happen.
            </p>
          </article>
          <figure className="p-8 flex-1 desktop:flex-none">
            <Image
              src={LinealParts}
              alt="Connecting rod finder"
              quality="100"
              height={500}
            />
          </figure>
        </div>
      </div>
      <div className="grid h-min p-8 place-items-center bg-slate-500 bg-[url('./../../public/landingImg/bg-patter.svg')] bg-repeat">
        <p className="max-w-5xl text-center text-4xl font-medium text-slate-950">
          Whether you&rsquo;re a garage guru or just love to get your hands
          dirty, our part finder is designed for riders like you. No more
          waiting, no more compromises—just the power to make your motorcycle
          truly yours!
        </p>
      </div>
      <div className="my-8">
        <h3 className="mb-8 text-center text-3xl">Our catalog features: </h3>
        <div className="flex flex-wrap justify-center gap-8">
          <PartCounter part={possibleParts.BrakeDisc} />
          <PartCounter part={possibleParts.ConnectingRods} />
          <PartCounter part={possibleParts.FSLargeSpline} />
          <PartCounter part={possibleParts.FSNarrowSpline} />
          <PartCounter part={possibleParts.PistonKit} />
          <PartCounter part={possibleParts.RearSprocket} />
          <PartCounter part={possibleParts.Valve} />
        </div>
      </div>
    </main>
  );
}

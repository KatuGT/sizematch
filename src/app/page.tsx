"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Piston from "@/3Dcomponents/Piston";

export default function Home() {
  return (
    <main className="relative flex h-full flex-1 items-center justify-center bg-[#111]">
      <div className="absolute text-[200px] text-white inset-0 text-center top-[15%] font-bold" >Piston kit</div>
      <div className="flex-1 h-[700px]">
        <Canvas>
          <Stage environment="studio" intensity={0.3}>
            <Piston />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
    </main>
  );
}

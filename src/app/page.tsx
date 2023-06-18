"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Piston from "@/3Dcomponents/Piston";

export default function Home() {
  return (
    <main className="flex h-full items-center justify-center flex-1">
      <div className="flex-1">Piston</div>
      <div className="h-[500px] flex-1">
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

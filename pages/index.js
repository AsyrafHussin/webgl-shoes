import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import Shoe from "../components/Shoe";

export default function Home() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 40 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <Shoe color="#80b701" position={[0, 0, 0]} />
          <Shoe
            color="#80b701"
            scale={-1}
            rotation={[0, 0.01, Math.PI]}
            position={[0, 0, -1]}
          />
        </Stage>
        <BakeShadows />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  );
}

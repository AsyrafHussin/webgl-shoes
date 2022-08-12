import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import Shoe from "./Shoe";
import { useAtom } from "jotai";
import { shoeColorAtom } from "../utils/atom";

export default function ShoeCanvas() {
  const [shoeColor] = useAtom(shoeColorAtom);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 40 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <Shoe color={shoeColor} position={[0, 0, 0]} />
          <Shoe
            color={shoeColor}
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

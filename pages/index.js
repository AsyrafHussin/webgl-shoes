import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import Shoe from "../components/Shoe";
import { TwitterPicker } from "react-color";

export default function Home() {
  const [showColor, setShoeColor] = useState("#80b701");

  const handleChangeComplete = (color) => {
    setShoeColor(color.hex);
  };

  return (
    <>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 40 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Shoe color={showColor} position={[0, 0, 0]} />
            <Shoe
              color={showColor}
              scale={-1}
              rotation={[0, 0.01, Math.PI]}
              position={[0, 0, -1]}
            />
          </Stage>
          <BakeShadows />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>

      <div className="colorpicker-container">
        <TwitterPicker
          color={showColor}
          onChangeComplete={handleChangeComplete}
        />
      </div>
    </>
  );
}

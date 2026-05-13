import React from "react";

import { Canvas } from "@react-three/fiber";

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ambientLight intensity={1} />

      <directionalLight position={[2, 2, 2]} />

      <mesh rotation={[0.4, 0.2, 0]}>
        <boxGeometry args={[2, 2, 2]} />

        <meshStandardMaterial
          color="#3b82f6"
        />
      </mesh>
    </Canvas>
  );
}

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function CoreOrb() {
  const ref = useRef();
  const shellRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (ref.current) {
      ref.current.rotation.y = t * 0.25;
      ref.current.rotation.x = Math.sin(t * 0.4) * 0.15;
      ref.current.position.y = Math.sin(t * 0.9) * 0.08;
    }

    if (shellRef.current) {
      shellRef.current.rotation.y = -t * 0.18;
      shellRef.current.rotation.x = t * 0.08;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.3}>
        <mesh ref={ref}>
          <icosahedronGeometry args={[1.25, 2]} />
          <meshStandardMaterial
            color="#38bdf8"
            roughness={0.15}
            metalness={0.75}
            emissive="#0ea5e9"
            emissiveIntensity={0.35}
          />
        </mesh>
      </Float>

      <mesh ref={shellRef} scale={1.45}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshBasicMaterial
          color="#7dd3fc"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>
    </group>
  );
}

function Particles() {
  const ref = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(180 * 3);

    for (let i = 0; i < 180; i++) {
      const radius = 2.4 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#38bdf8"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.75}
      />
    </points>
  );
}

function GroundRing() {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]} position={[0, -1.8, 0]}>
      <torusGeometry args={[1.8, 0.025, 16, 120]} />
      <meshBasicMaterial color="#38bdf8" transparent opacity={0.45} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="canvas-wrap">
      <Canvas camera={{ position: [0, 0, 5], fov: 48 }}>
        <color attach="background" args={["#020617"]} />

        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} intensity={2.2} />
        <pointLight position={[-3, -1, 2]} intensity={1.2} color="#38bdf8" />

        <Stars
          radius={60}
          depth={30}
          count={800}
          factor={2}
          saturation={0}
          fade
        />

        <Particles />
        <GroundRing />
        <CoreOrb />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.7}
        />
      </Canvas>
    </div>
  );
}

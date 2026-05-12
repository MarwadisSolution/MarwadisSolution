import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Environment,
  RoundedBox,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";

import { useRef, useMemo, Suspense } from "react";

/* Laptop */
function Laptop() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
    }
  });

  return (
    <group ref={group} position={[0, -0.3, 0]}>
      <RoundedBox args={[3, 0.18, 2]} radius={0.06}>
        <meshStandardMaterial
          color="#1a1f3a"
          metalness={0.85}
          roughness={0.25}
        />
      </RoundedBox>

      <group position={[0, 1.05, -0.95]} rotation={[-0.18, 0, 0]}>
        <RoundedBox args={[3, 2, 0.1]} radius={0.06}>
          <meshStandardMaterial
            color="#1a1f3a"
            metalness={0.85}
            roughness={0.25}
          />
        </RoundedBox>

        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2.85, 1.85]} />

          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.7}
          />
        </mesh>
      </group>
    </group>
  );
}

/* Phone */
function Phone() {
  return (
    <Float speed={1.8}>
      <group position={[2.6, 0.9, 0.6]} rotation={[0.1, -0.45, 0.18]}>
        <RoundedBox args={[0.8, 1.6, 0.09]} radius={0.09}>
          <meshStandardMaterial
            color="#0a0e1a"
            metalness={0.9}
            roughness={0.15}
          />
        </RoundedBox>

        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[0.7, 1.5]} />

          <meshStandardMaterial
            color="#60a5fa"
            emissive="#3b82f6"
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* Blob */
function GlowBlob() {
  return (
    <Float speed={1}>
      <Sphere args={[0.7, 64, 64]} position={[-2.7, 0.6, -1]}>
        <MeshDistortMaterial
          color="#3b82f6"
          emissive="#1e40af"
          emissiveIntensity={0.6}
          distort={0.45}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

/* Particles */
function Particles({ count = 200 }) {
  const mesh = useRef();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return arr;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.045}
        color="#93c5fd"
        transparent
        opacity={0.85}
      />
    </points>
  );
}

/* Camera */
function CameraRig() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.05;

    camera.position.y +=
      (1 + mouse.y * 0.4 - camera.position.y) * 0.05;

    camera.lookAt(0, 0.2, 0);
  });

  return null;
}

/* Main */
export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 1, 6.5], fov: 45 }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <CameraRig />

        <ambientLight intensity={0.45} />

        <pointLight
          position={[5, 5, 5]}
          intensity={1}
          color="#3b82f6"
        />

        <pointLight
          position={[-5, -3, 2]}
          intensity={0.7}
          color="#8b5cf6"
        />

        <directionalLight position={[0, 8, 4]} intensity={0.6} />

        <Float speed={1.2}>
          <Laptop />
        </Float>

        <Phone />

        <GlowBlob />

        <Particles count={220} />

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}

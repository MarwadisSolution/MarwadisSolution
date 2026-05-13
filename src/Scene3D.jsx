import React, {
  Suspense,
  useMemo,
  useRef,
} from "react";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

import {
  Float,
  RoundedBox,
  Sphere,
  MeshDistortMaterial,
} from "@react-three/drei";

/* =========================
   Laptop
========================= */
function Laptop() {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.3;

      group.current.position.y =
        Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
    }
  });

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      {/* Base */}
      <RoundedBox
        args={[3, 0.2, 2]}
        radius={0.08}
        smoothness={4}
      >
        <meshStandardMaterial
          color="#1e293b"
          metalness={1}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Keyboard */}
      <mesh position={[0, 0.11, 0.15]}>
        <planeGeometry args={[2.5, 1.3]} />

        <meshStandardMaterial
          color="#0f172a"
          metalness={0.7}
          roughness={0.4}
        />
      </mesh>

      {/* Screen */}
      <group
        position={[0, 1.05, -0.9]}
        rotation={[-0.18, 0, 0]}
      >
        <RoundedBox
          args={[3, 2, 0.1]}
          radius={0.06}
          smoothness={4}
        >
          <meshStandardMaterial
            color="#1e293b"
            metalness={1}
            roughness={0.2}
          />
        </RoundedBox>

        {/* Screen glow */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2.8, 1.8]} />

          <meshStandardMaterial
            color="#2563eb"
            emissive="#3b82f6"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Fake code lines */}
        {[...Array(8)].map((_, i) => (
          <mesh
            key={i}
            position={[
              -0.8 + Math.random() * 0.3,
              0.7 - i * 0.22,
              0.07,
            ]}
          >
            <planeGeometry
              args={[1 + Math.random(), 0.04]}
            />

            <meshBasicMaterial color="#dbeafe" />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* =========================
   Phone
========================= */
function Phone() {
  const phone = useRef();

  useFrame((state) => {
    if (phone.current) {
      phone.current.rotation.y =
        Math.sin(state.clock.elapsedTime) * 0.4;

      phone.current.position.y =
        0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.15;
    }
  });

  return (
    <group
      ref={phone}
      position={[2.8, 1, 0.5]}
      rotation={[0.2, -0.5, 0.15]}
    >
      <RoundedBox
        args={[0.8, 1.6, 0.08]}
        radius={0.08}
      >
        <meshStandardMaterial
          color="#0f172a"
          metalness={1}
          roughness={0.2}
        />
      </RoundedBox>

      <mesh position={[0, 0, 0.045]}>
        <planeGeometry args={[0.7, 1.45]} />

        <meshStandardMaterial
          color="#60a5fa"
          emissive="#2563eb"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Notch */}
      <mesh position={[0, 0.66, 0.05]}>
        <planeGeometry args={[0.22, 0.05]} />
        <meshBasicMaterial color="#000" />
      </mesh>
    </group>
  );
}

/* =========================
   Blob
========================= */
function GlowBlob() {
  const blob = useRef();

  useFrame((state) => {
    if (blob.current) {
      blob.current.rotation.y += 0.01;

      blob.current.position.y =
        Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
    }
  });

  return (
    <group ref={blob}>
      <Sphere
        args={[0.8, 64, 64]}
        position={[-3, 0.8, -1]}
      >
        <MeshDistortMaterial
          color="#3b82f6"
          emissive="#1d4ed8"
          emissiveIntensity={1}
          distort={0.45}
          speed={2}
          roughness={0.2}
        />
      </Sphere>
    </group>
  );
}

/* =========================
   Particles
========================= */
function Particles({ count = 250 }) {
  const points = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return pos;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y =
        state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.05}
        color="#93c5fd"
        transparent
        opacity={0.8}
      />
    </points>
  );
}

/* =========================
   Camera Animation
========================= */
function CameraRig() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x +=
      (mouse.x * 0.8 - camera.position.x) * 0.04;

    camera.position.y +=
      (1 + mouse.y * 0.5 - camera.position.y) * 0.04;

    camera.lookAt(0, 0.2, 0);
  });

  return null;
}

/* =========================
   Main Scene
========================= */
export default function Scene3D() {
  return (
    <Canvas
      camera={{
        position: [0, 1, 7],
        fov: 45,
      }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <CameraRig />

        {/* Lights */}
        <ambientLight intensity={0.5} />

        <pointLight
          position={[5, 5, 5]}
          intensity={2}
          color="#3b82f6"
        />

        <pointLight
          position={[-5, -3, 2]}
          intensity={1}
          color="#8b5cf6"
        />

        <directionalLight
          position={[0, 8, 4]}
          intensity={1}
        />

        {/* Objects */}
        <Float
          speed={1.2}
          rotationIntensity={0.4}
          floatIntensity={0.6}
        >
          <Laptop />
        </Float>

        <Phone />

        <GlowBlob />

        <Particles count={250} />
      </Suspense>
    </Canvas>
  );
}

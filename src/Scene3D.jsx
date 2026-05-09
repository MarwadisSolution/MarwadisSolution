import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Float,
  Environment,
  RoundedBox,
  Sphere,
  MeshDistortMaterial,
} from '@react-three/drei'
import { useRef, useMemo, Suspense } from 'react'
import * as THREE from 'three'

/* ----- Laptop ----- */
function Laptop() {
  const group = useRef()
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.25
    }
  })
  return (
    <group ref={group} position={[0, -0.3, 0]} rotation={[0.05, 0, 0]}>
      {/* base */}
      <RoundedBox args={[3, 0.18, 2]} radius={0.06} smoothness={4} castShadow>
        <meshStandardMaterial
          color="#1a1f3a"
          metalness={0.85}
          roughness={0.25}
        />
      </RoundedBox>
      {/* keyboard hint */}
      <mesh position={[0, 0.1, 0.2]}>
        <planeGeometry args={[2.6, 1.4]} />
        <meshStandardMaterial
          color="#0a0e1a"
          metalness={0.9}
          roughness={0.4}
        />
      </mesh>
      {/* screen back */}
      <group position={[0, 1.05, -0.95]} rotation={[-0.18, 0, 0]}>
        <RoundedBox args={[3, 2, 0.1]} radius={0.06} smoothness={4} castShadow>
          <meshStandardMaterial
            color="#1a1f3a"
            metalness={0.85}
            roughness={0.25}
          />
        </RoundedBox>
        {/* glowing screen */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2.85, 1.85]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.7}
            toneMapped={false}
          />
        </mesh>
        {/* code-like lines on screen */}
        {[0.55, 0.35, 0.15, -0.05, -0.25, -0.45, -0.65].map((y, i) => (
          <mesh key={i} position={[-0.7 + (i % 3) * 0.1, y, 0.07]}>
            <planeGeometry args={[1 + (i % 3) * 0.4, 0.05]} />
            <meshBasicMaterial color="#dbeafe" toneMapped={false} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

/* ----- Phone ----- */
function Phone() {
  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.9}>
      <group position={[2.6, 0.9, 0.6]} rotation={[0.1, -0.45, 0.18]}>
        <RoundedBox args={[0.8, 1.6, 0.09]} radius={0.09} smoothness={4}>
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
            toneMapped={false}
          />
        </mesh>
        {/* notch */}
        <mesh position={[0, 0.65, 0.052]}>
          <planeGeometry args={[0.25, 0.06]} />
          <meshBasicMaterial color="#0a0e1a" />
        </mesh>
      </group>
    </Float>
  )
}

/* ----- Glowing distorted blob ----- */
function GlowBlob() {
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={0.6}>
      <Sphere args={[0.7, 64, 64]} position={[-2.7, 0.6, -1]}>
        <MeshDistortMaterial
          color="#3b82f6"
          emissive="#1e40af"
          emissiveIntensity={0.6}
          distort={0.45}
          speed={2}
          metalness={0.7}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  )
}

/* ----- Ambient particles ----- */
function Particles({ count = 200 }) {
  const mesh = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.04
    }
  })

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
        sizeAttenuation
      />
    </points>
  )
}

/* ----- Camera follows mouse subtly ----- */
function CameraRig() {
  const { camera, mouse } = useThree()
  useFrame(() => {
    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.05
    camera.position.y += (1 + mouse.y * 0.4 - camera.position.y) * 0.05
    camera.lookAt(0, 0.2, 0)
  })
  return null
}

/* ----- Main scene ----- */
export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 1, 6.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <CameraRig />

        <ambientLight intensity={0.45} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#3b82f6" />
        <pointLight position={[-5, -3, 2]} intensity={0.7} color="#8b5cf6" />
        <directionalLight position={[0, 8, 4]} intensity={0.6} />

        <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.5}>
          <Laptop />
        </Float>

        <Phone />
        <GlowBlob />
        <Particles count={220} />

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}

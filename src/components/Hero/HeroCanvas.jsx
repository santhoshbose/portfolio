import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import './HeroCanvas.css';

/**
 * AnimatedSphere — Wireframe icosahedron with distortion
 * Rotates continuously and floats vertically.
 */
function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#66FCF1"
          emissive="#66FCF1"
          emissiveIntensity={0.15}
          roughness={0.3}
          metalness={0.8}
          wireframe
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

/**
 * ParticleField — 200 tiny floating dots around the sphere
 */
function ParticleField() {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const coords = [];
    for (let i = 0; i < 200; i++) {
      coords.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
    }
    return new Float32Array(coords);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.03;
    pointsRef.current.rotation.x = t * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#66FCF1"
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

/**
 * HeroCanvas — R3F Canvas with animated 3D scene
 */
export default function HeroCanvas() {
  return (
    <div className="hero-canvas-container">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#66FCF1" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#C678DD" />
        <AnimatedSphere />
        <ParticleField />
      </Canvas>
    </div>
  );
}

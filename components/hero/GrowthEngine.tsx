"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const coreRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (coreRef.current && wireframeRef.current) {
      coreRef.current.rotation.y += delta * 0.2;
      coreRef.current.rotation.x += delta * 0.1;
      
      wireframeRef.current.rotation.y -= delta * 0.15;
      wireframeRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group>
      <Icosahedron ref={coreRef} args={[1.5, 2]}>
        <meshStandardMaterial 
          color="#7C3AED" 
          emissive="#7C3AED" 
          emissiveIntensity={0.5} 
          roughness={0.2} 
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </Icosahedron>
      
      <Icosahedron ref={wireframeRef} args={[1.7, 1]}>
        <meshBasicMaterial 
          color="#22D3EE" 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </Icosahedron>
    </group>
  );
}

function DataParticles({ count = 200 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    /* eslint-disable react-hooks/purity */
    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    /* eslint-enable react-hooks/purity */
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial
        transparent
        color="#2563EB"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function OrbitalRings() {
  const ringRef1 = useRef<THREE.Group>(null);
  const ringRef2 = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (ringRef1.current) ringRef1.current.rotation.x += delta * 0.1;
    if (ringRef2.current) ringRef2.current.rotation.y += delta * 0.15;
  });

  const circleGeometry = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * 4, Math.sin(angle) * 4, 0));
    }
    return points;
  }, []);

  return (
    <group>
      <group ref={ringRef1} rotation={[Math.PI / 3, 0, 0]}>
        <Line points={circleGeometry} color="#7C3AED" transparent opacity={0.2} lineWidth={1} />
        {/* An orbiting node */}
        <mesh position={[4, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
      <group ref={ringRef2} rotation={[0, Math.PI / 4, 0]}>
        <Line points={circleGeometry} color="#22D3EE" transparent opacity={0.2} lineWidth={1} />
        <mesh position={[0, 4, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </group>
  );
}

export default function GrowthEngine() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle float animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      
      // Interactive rotation based on pointer
      const targetRotationX = (state.pointer.y * Math.PI) / 8;
      const targetRotationY = (state.pointer.x * Math.PI) / 8;
      
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#7C3AED" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#22D3EE" />
      
      <Core />
      <DataParticles count={300} />
      <OrbitalRings />
    </group>
  );
}

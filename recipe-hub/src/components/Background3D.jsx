import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

function GlassCube({ position, rotationSpeed }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (ref.current) {
      
      ref.current.rotation.x += rotationSpeed;
      ref.current.rotation.y += rotationSpeed * 3.2;

     
      ref.current.position.y = position[1] + Math.sin(clock.elapsedTime + position[2]) * 2.5;
    }
  });

  return (
    
    <mesh ref={ref} position={position}>
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshPhysicalMaterial
        color="red"
        roughness={0}
        transmission={2}   
        thickness={11.5}
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.25}
        envMapIntensity={1}
        opacity={0.8}
        transparent
        reflectivity={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Background3D() {
  const cubePositions = [
    [-4, 0, 5],
    [3, 1, -6],
    [-2, -1.5, -7],
    [1, 0.5, -4],
    [4.5, -.5, 4.5],
  ];

  return (
        <Canvas
        className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-r from-red-300 via-orange-100 to-yellow-300 "
        camera={{ position: [0, 2, 10], fov: 50 }}
      >
      
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={5} fade speed={1} />

      {cubePositions.map((pos, idx) => (
        <GlassCube key={idx} position={pos} rotationSpeed={0.002 + idx * 0.001} />
      ))}
    </Canvas>
    
  );
}

export default Background3D;

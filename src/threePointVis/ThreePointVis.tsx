import { Canvas } from "@react-three/fiber";
import Controls from "./Controls";

const ThreePointVis = () => {
  return (
    // Because it's 3D all positions will take a three dimensional tuple: [x, y, z]
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Controls />
      <ambientLight color="#ffffff" intensity={0.1} />
      <hemisphereLight args={["#42f5a4", "#4287f5", 1.0]} />
      <mesh position={[0, 0, 0]} rotation={[Math.PI * 0.5, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.15, 32]} />
        <meshStandardMaterial attach="material" color="#fff" />
      </mesh>
    </Canvas>
  );
};

export default ThreePointVis;

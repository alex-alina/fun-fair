import { Canvas } from "@react-three/fiber";
import Controls from "./Controls";
import InstancedPoints from "./InstancedPoints";

interface ThreePointsVisProps {
  data: Array<{ id: number }>;
}
const ThreePointVis = ({ data }: ThreePointsVisProps) => {
  return (
    // Because it's 3D all positions will take a three dimensional tuple: [x, y, z]
    <Canvas camera={{ position: [0, 0, 40] }}>
      <Controls />
      <ambientLight color="#ffffff" intensity={0.1} />
      <hemisphereLight args={["#42f5a4", "#4287f5", 1.0]} />
      <InstancedPoints data={data} />
      {/* {data.map((d, i) => {
        const x = (i % 30) * 1.05;
        const y = Math.floor(i / 30) * 1.05;
        const z = 0;
        return (
          <mesh
            key={d.id}
            position={[x, y, z]}
            rotation={[Math.PI * 0.5, 0, 0]}
          >
            <cylinderGeometry args={[0.5, 0.5, 0.15, 32]} />
            <meshStandardMaterial color="#fff" />
          </mesh>
        );
      })} */}
    </Canvas>
  );
};

export default ThreePointVis;

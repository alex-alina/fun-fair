import { Canvas } from "@react-three/fiber";
import Controls from "./Controls";
import InstancedPoints from "./InstancedPoints";

export type LayoutName = "grid" | "spiral";
export interface LayoutPoint {
  id: number;
  x?: number;
  y?: number;
  z?: number;
}
export interface PointsProps {
  data: Array<LayoutPoint>;
  layout: LayoutName;
}
const ThreePointVis = ({ data, layout }: PointsProps) => {
  return (
    // Because it's 3D all positions will take a three dimensional tuple: [x, y, z]
    <Canvas camera={{ position: [0, 0, 40] }}>
      <Controls />
      <ambientLight color="#ffffff" intensity={0.1} />
      <hemisphereLight args={["#42f5a4", "#4287f5", 1.0]} />
      <InstancedPoints data={data} layout={layout} />
    </Canvas>
  );
};

export default ThreePointVis;

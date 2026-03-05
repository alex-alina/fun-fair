import * as React from "react";
import * as THREE from "three";
import { useLayout } from "./layouts";
import type { PointsProps } from "./ThreePointVis";

// re-use for instance computations
const scratchObject3D = new THREE.Object3D();

const InstancedPoints = ({ data, layout }: PointsProps) => {
  useLayout({ data, layout });

  const meshRef = React.useRef<THREE.InstancedMesh | null>(null);
  const numPoints = data.length;

  // update instance matrices only when needed
  React.useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // set the transform matrix for each instance
    for (let i = 0; i < numPoints; ++i) {
      const { x, y, z } = data[i];

      scratchObject3D.position.set(x ?? 0, y ?? 0, z ?? 0);
      scratchObject3D.rotation.set(0.5 * Math.PI, 0, 0); // cylinders face z direction
      scratchObject3D.updateMatrix();
      mesh.setMatrixAt(i, scratchObject3D.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  }, [data, layout, numPoints]);

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, numPoints]}
      // set frustumCulled - without it, it seems Three will remove all instances from the screen
      // when [0, 0, 0] (more or less) is off the screen
      frustumCulled={false}
    >
      <cylinderGeometry args={[0.5, 0.5, 0.15, 32]} />
      <meshStandardMaterial color="#fff" />
    </instancedMesh>
  );
};

export default InstancedPoints;

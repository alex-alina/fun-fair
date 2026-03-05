import * as React from "react";
import * as THREE from "three";

interface InstancedPointsVisProps {
  data: Array<{ id: number }>;
}

// re-use for instance computations
const scratchObject3D = new THREE.Object3D();

const InstancedPoints = ({ data }: InstancedPointsVisProps) => {
  const meshRef = React.useRef<THREE.InstancedMesh | null>(null);
  const numPoints = data.length;

  // update instance matrices only when needed
  React.useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // set the transform matrix for each instance
    for (let i = 0; i < numPoints; ++i) {
      const x = (i % 30) * 1.05;
      const y = Math.floor(i / 30) * 1.05;
      const z = 0;

      scratchObject3D.position.set(x, y, z);
      scratchObject3D.rotation.set(0.5 * Math.PI, 0, 0); // cylinders face z direction
      scratchObject3D.updateMatrix();
      mesh.setMatrixAt(i, scratchObject3D.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
  }, [numPoints]);

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

import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import Controls from "../threePointVis/Controls";
import { OrbitControls } from "@react-three/drei";

export const Shapes = () => {
  const heartMesh = useMemo(() => {
    const heartShape = new THREE.Shape();
    heartShape.moveTo(25, 25);
    heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
    heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
    heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
    heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
    heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
    heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);

    const geometry = new THREE.ExtrudeGeometry(heartShape, {
      depth: 8,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 2,
      bevelSize: 1,
      bevelThickness: 1,
    });
    geometry.center();

    const material = new THREE.MeshStandardMaterial({ color: "#ef4444" });
    return new THREE.Mesh(geometry, material);
  }, []);

  return (
    <div className="relative box-border h-screen p-4">
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <Canvas
          camera={{ position: [2, 2, 5] }}
          className="flex justify-around"
        >
          <OrbitControls />
          {/* <ambientLight intensity={0.6} />
          <directionalLight position={[20, 40, 40]} intensity={1.2} />
          <primitive
            object={heartMesh}
            rotation={[Math.PI, 0, 0]}
            scale={0.7}
          /> */}
          <mesh>
            <torusKnotGeometry args={[1.7, 0.3, 256, 256]} />
            <meshToonMaterial color={0x00bfff} />
          </mesh>

          <mesh>
            <sphereGeometry args={[3, 80, 80]} />
            <meshBasicMaterial wireframe />
          </mesh>
          <mesh>
            <boxGeometry args={[2, 3, 2]} />
            <meshPhongMaterial color="#03fcdf" />
          </mesh>
          {/* <ambientLight intensity={0.6} /> */}
          <directionalLight position={[2, 5, 1]} />
        </Canvas>
      </div>
    </div>
  );
};

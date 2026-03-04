import { useThree, useFrame } from "@react-three/fiber";
import { useRef, type ComponentProps, type ComponentRef } from "react";
import { TrackballControls } from "@react-three/drei";
import * as THREE from "three";

// key code constants
const ALT_KEY = "AltLeft";
const CTRL_KEY = "ControlLeft";
const CMD_KEY = "MetaLeft";

const Controls = () => {
  const controls = useRef<ComponentRef<typeof TrackballControls> | null>(null);
  const { camera, gl } = useThree();
  const mouseButtons: ComponentProps<typeof TrackballControls>["mouseButtons"] =
    {
      // overridden default behavior to have left-click pan instead of rotate to make it act like a slippy map.
      // Two finger drag or alt/option drag will rotate on a trackpad
      LEFT: THREE.MOUSE.PAN, // make pan the default instead of rotate
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.ROTATE,
    };

  useFrame(() => {
    // update the view as the vis is interacted with
    controls.current?.update();
  });

  return (
    <TrackballControls
      ref={controls}
      camera={camera}
      domElement={gl.domElement}
      // gives the controls some momentum and makes it feel a bit more natural
      dynamicDampingFactor={0.1}
      keys={[
        ALT_KEY, // orbit
        CTRL_KEY, // zoom
        CMD_KEY, // pan
      ]}
      mouseButtons={mouseButtons}
    />
  );
};

export default Controls;

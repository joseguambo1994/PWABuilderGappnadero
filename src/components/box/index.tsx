import { useRef, useState } from "react";
import "./index.css";
import { Vector3, useFrame } from "@react-three/fiber";

interface BoxProps {
    position: Vector3
}

const Box = ({
    position= [0,0,0]
    }:BoxProps) => {
  const boxRef = useRef();
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  useFrame(() => {
    if (hover) {
        //boxRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group ref={boxRef}
     position={position}
    >
      <mesh
        onClick={() => {
          setActive(!active);
        }}
        onPointerOver={() => {
          setHover(true);
        }}
        onPointerOut={() => {
          setHover(false);
        }}
      >
        <boxGeometry attach="geometry" />
        <meshLambertMaterial
          attach="material"
          color={active ? "green" : "red"}
        />
      </mesh>
    </group>
  );
};

export default Box;
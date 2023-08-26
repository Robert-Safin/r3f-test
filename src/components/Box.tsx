"use client";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import { Event, Mesh } from "three";
import { OrbitControls, Stats } from "@react-three/drei";
import { useControls } from "leva";
interface Props {
  position: [number, number, number];
  name: string;
}

const Box: FC<Props> = (props) => {


  useFrame((state, delta) => {});

  return (
    <>
      <mesh position={props.position} receiveShadow castShadow>
        <boxGeometry />
        <meshStandardMaterial   color={'red'} />
        <OrbitControls />
        <pointLight intensity={1} position={[0,0,3]} castShadow/>
      </mesh>
    </>
  );
};

export default Box;

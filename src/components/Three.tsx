"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { FC } from "react";
import { Center, Html, OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { MathUtils, Vector3 } from "three";
const Three: FC = (props) => {

  const { scene } = useGLTF("monkey.glb");








  return (
    <div className="flex mx-auto bg-blue-300 w-acreen h-screen">
      <Canvas camera={{ position: [0, 0, 5] }} shadows>

        <Center>
        <primitive object={scene} position={[5,5,5]}

        />
        </Center>

        <Html position={[0,0,5]} transform occlude>
          <div>
            <h1 className="text-3xl">hi mum</h1>
          </div>
 </Html>


        <OrbitControls />
        <Environment files="hdr.hdr" background  blur={0}
        />
        {/* <pointLight intensity={10} position={[1, 2, 2]} castShadow /> */}
      </Canvas>
    </div>
  );
};

export default Three;

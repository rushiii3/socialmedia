import { Canvas } from '@react-three/fiber';
import React, { useRef, useState, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { Model } from '../Rushi';
import { Environment, OrbitControls } from '@react-three/drei';
const ThreeD = () => {
  return (
    <div className='h-screen w-screen bg-sky-200'>
       <Canvas  camera={{ position: [500, 200, 200], fov: 5 }}>
        <Suspense fallback={null} >
        <ambientLight intensity={0.1} />
        <directionalLight position={[3.3, 1.0, 4.4]} intensity={1} />
          <Model scale={[10, 10, 10]}/>
          <OrbitControls target={[1, 1, 1]} autoRotate />
          <Environment preset='sunset' />
     
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeD;

// export function Cylinder3d(props) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef();
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false);
//   const [clicked, click] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x += 0.01));
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? 1.5 : 1}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}
//     >
//       <cylinderGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial
//         wireframe={props.wireframe}
//         color={hovered ? "hotpink" : "orange"}
//       />
//     </mesh>
//   );
// }


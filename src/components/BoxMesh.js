import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
// import { MeshStandardMaterial } from '@react-three/drei';

const BoxMesh = () => {
  const mesh= useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh 
      scale={[1, 1, 1]}
      castShadow
      position={[0,0,0]}
      ref={mesh}>
      <boxBufferGeometry attach='geometry' args={[5,5,5]} />
      {/* <MeshStandardMaterial  attach='material' color='red' speed={6} factor={0.6}/> */}
    </mesh>
  );
}

export default BoxMesh;
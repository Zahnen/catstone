import React, { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import bulma from '../img/bulma.jpg';
import mara from '../img/mara.jpg';
import creamy from '../img/creamy.jpg';


const BoxMesh = () => {
  const mesh1= useRef(null);
  const mesh2= useRef(null);
  const mesh3= useRef(null);
  useFrame(() => (mesh1.current.rotation.x = mesh1.current.rotation.y += 0.01))
  useFrame(() => (mesh2.current.rotation.x = mesh2.current.rotation.y += 0.01))
  useFrame(() => (mesh3.current.rotation.x = mesh3.current.rotation.y += 0.01))
  const texture1 = useLoader(THREE.TextureLoader, bulma)
  const texture2 = useLoader(THREE.TextureLoader, mara)
  const texture3 = useLoader(THREE.TextureLoader, creamy)

  return (
    <>
    <mesh
      scale={[1, 1, 1]}
      castShadow
      position={[0,0,0]}
      ref={mesh1}>
      <boxBufferGeometry attach='geometry' args={[3,3,3]} />
      <meshBasicMaterial  attach='material' map={texture1} speed={6} factor={0.6}/>
    </mesh>

    <mesh
      scale={[1, 1, 1]}
      castShadow
      position={[6,0,0]}
      ref={mesh2}>
      <boxBufferGeometry attach='geometry' args={[3,3,3]} />
      <meshBasicMaterial  attach='material' map={texture2} speed={6} factor={0.6}/>
    </mesh>

    <mesh
      scale={[1, 1, 1]}
      castShadow
      position={[-6,0,0]}
      ref={mesh3}>
      <boxBufferGeometry attach='geometry' args={[3,3,3]} />
      <meshBasicMaterial  attach='material' map={texture3} speed={6} factor={0.6}/>
    </mesh>
    </>
  );
}

export default BoxMesh;

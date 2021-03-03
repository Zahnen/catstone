import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import BoxMesh from './BoxMesh';

// import { useSpring, a} from 'react-spring/three';

// import * as THREE from 'three';

function Threed() {

  return(
  <Canvas camera={{position: [-5, 2, 10], fov: 60}}>
    <BoxMesh />
    <OrbitControls />
  </Canvas>
  )
}

export default Threed;
import React from 'react'
import {Sphere, MeshDistortMaterial} from "@react-three/drei"

const Sph = () => {
  return <Sphere visible args={[1,100,200]} scale={2.8}>
    <MeshDistortMaterial
        color="#E26EE5"
        attach="material"
        distort={0.3}
        speed={2.5}
        roughness={0.5}
    />
  </Sphere>
}

export default Sph
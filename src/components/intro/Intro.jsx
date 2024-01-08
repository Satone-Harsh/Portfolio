import React, { Suspense, useEffect, useRef } from 'react'
import "./Intro.css"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Sph from './Sph'
import {init} from 'ityped'

const Intro = () => {
    const textRef=useRef();

    useEffect(()=>{
        console.log(textRef);
        init(textRef.current, { showCursor: false,backDelay:1500, backSpeed:60, strings: ['MERN','MEAN', 'Android','Java' ] })
    },[])

  return (
    <div className='intro'>
        <div className='hero'>
        <Canvas className='canvas'>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2,5,2]} intensity={1}/>
            <Suspense fallback={null}>
                <Sph/>
            </Suspense>
        </Canvas>
            <img src='assets/hero3.png' alt=''/>
        </div>


        <div className='name'>
            <h2>Hi there! I am,</h2>
            <h1>Harsh Satone</h1>
            <h3><span ref={textRef}></span> developer</h3>
        </div>
    </div>
  )
}

export default Intro
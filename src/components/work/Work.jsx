import React, { Suspense } from 'react'
import "./Work.css"
import Sph from '../intro/Sph'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Lottie from "lottie-react"
import and from "./and.json"
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa'
import { FaArrowRightFromBracket, FaArrowUpRightFromSquare, FaSquareArrowUpRight } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'

const Work = () => {
  return (
    <div className='work'>
        <h1 id='work'>Projects</h1>
        <div className='tech'>
            <a href='https://react.dev/'><img src='assets/react.png' className='logo'/></a>
            <a href='https://angular.io/'><img src='assets/angular.png' className='logo'/></a>
            <a href='https://developer.android.com/'><Lottie className='logoa' animationData={and}/></a>
            <a href='https://www.mongodb.com/'><img src='assets/mongo2.png' className='logo'/></a>
            <a href='https://nodejs.org/en/learn/getting-started/introduction-to-nodejs'><img src='assets/node.png' className='logo'/></a>
        </div>
        <div className='container'>
        <div className='item'>
            <img src='assets/inkspire.png' alt=''/>
            <h3>
            <a href='https://medium.com/@harshsatone2/ink-that-inspires-c34775fdd5f4' target="_blank" className='a-link'>
            InkSpire <FaArrowUpRightFromSquare className='redirect' />
            </a>
            </h3>
            <p>
            <li>A MERN stack project where one can login/register and write book reviews from their account.</li><br/>
            <li>CRUD operations</li><br/>
            <li>Encryption of passwords.</li><br/>
            <li>Login/Logout</li>
            </p>
        </div>
        <div className='item'>
            <img src='assets/habitCraft.png' alt=''/>
            <h3>
            <a href='https://habit-craft.vercel.app/' target="_blank" className='a-link'>
            Habit Craft <FaArrowUpRightFromSquare className='redirect' />
            </a>
            </h3>
            <p>
            <li>An Angular project where one can add new tasks.</li><br/>
            <li>Tasks can be re-rendered after completion for the next day.</li><br/>
            <li>A help guide for using of application.</li><br/>
            <li>Creation, Read and delete functionalities</li>
            </p>
        </div>
        <div className='item'>
            <img src='assets/coral.png' alt=''/>
            <h3>
            <a href='https://medium.com/@harshsatone2/coral-your-social-ecosystem-09ae1493e5fa' target="_blank" className='a-link'>
            Coral <FaArrowUpRightFromSquare className='redirect' />
            </a>
            </h3>
            <p>
            <li>A MEAN stack project where one can login/register and make a social media from their own account.</li><br/>
            <li>CRUD operations</li><br/>
            <li>Encryption of passwords.</li><br/>
            <li>Login/Logout</li>
            </p>
        </div>
        <div className='item'>
            <img src='assets/recipe.png' alt=''/>
            <h3>
            <a href='https://medium.com/@harshsatone2/health-crisp-699bc039b3c5' target="_blank" className='a-link'>
            Health Crisp <FaArrowUpRightFromSquare className='redirect' />
            </a>
            </h3>
            <p>
            <li>A React project using an API where one can render recipies based on ingredients they search for.</li><br/>
            <li>Based on API calls</li><br/>
            <li>useState, useEffect , .map() functionalities.</li><br/>
            <li>Responsive.</li>
            </p>
        </div>
        <div className='item'>
            <img src='assets/covid.png' alt=''/>
            <h3>
            <a href='https://polite-panda-6ff0fd.netlify.app/' target="_blank" className='a-link'>
            Covid tracker <FaArrowUpRightFromSquare className='redirect' />
            </a>
            </h3>
            <p>
            <li>A React project which fetches live updates on corona virus and it's strains.</li><br/>
            <li>Based on API calls</li><br/>
            <li>useState, useEffect , .map() functionalities.</li><br/>
            <li>Responsive.</li>
            </p>
        </div>
        <div className='item'>
            <img src='assets/uniq.png' alt=''/>
            <h3>
            <a href='https://www.uniquefashions.in/' target="_blank" className='a-link'>
            Unique Fashions <FaArrowUpRightFromSquare className='redirect' />
            </a>
            </h3>
            <p>
            <li>A hosted website made for a client who had a Fashion buisness.</li><br/>
            <li>Based on HTML, CSS and Bootstrap</li><br/>
            <li>Dynamic for screening on phones.</li><br/>
            <li>Hosted on GitHub</li>
            </p>
        </div>
        <div className='item'>
            <img src='assets/freshPlanet.png' alt=''/>
            <h3>
            <a href='https://satone-harsh.github.io/freshplanet/' target="_blank" className='a-link'>
            Fresh planet <FaArrowUpRightFromSquare className='redirect' />
            </a>
            </h3>
            <p>
            <li>My very first project with which i started my web development journey.</li><br/>
            <li>Based on basic HTML and css</li><br/>
            <li>Made to collect donations for planting trees.</li><br/>
            <li>Hosted on GitHub</li>
            </p>
        </div>
        <div className='item'>
            <img src='assets/and2.png' alt=''/>
            <h3>
            <a href='https://medium.com/@harshsatone2/speed-solver-65b71ebb016e' target="_blank" className='a-link'>
            Speed solver <FaArrowUpRightFromSquare className='redirect' />
            </a>
            </h3>
            <p>
            <li>An Android project which drives one to increase their cerebral thinking.</li><br/>
            <li>Java functionalities to render random numbers.</li><br/>
            <li>Includes timer to set a limit.</li><br/>
            <li>Integrated with XML</li>
            </p>
        </div>
        </div>
    </div>
  )
}

export default Work
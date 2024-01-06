import React from 'react'
import "./About.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap,FaLink,FaSchool } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoAndroid } from "react-icons/io";
import { GrDocumentDownload } from "react-icons/gr";
import Lottie from "lottie-react"
import reac from "./reac.json"

const About = () => {
  return (
    <div className='about' id='about'>
    <div className='tp'>
        <h1>Timeline</h1>
    </div>
        {/* <div className='abt-container'>
            <div className='a-left'>
                123
            </div>
            <div className='a-right'>
                123
            </div>
        </div> */}

        <div className='exp'>
        <a href='assets/resume.pdf' download='resume.pdf'>
        <button className='resumee'>Resume {<GrDocumentDownload/>}
        </button>
        </a>

          <VerticalTimeline lineColor='#001524'>

            <VerticalTimelineElement className='vertical-timeline-element--education ll'
            iconStyle={{background:'#001524',color:'#fff'}}
            icon={<FaSchool color='#FAEF5D'/>}
            date='2009 - 2021'>
            <div className='cont'>
            <h3 className='t-head'>SSC and HSC</h3>
            <p style={{fontWeight:"300"}}>From Bhavans Lloyds Vidya Niketan with SSC 93.4%</p>
            </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education'
            iconStyle={{background:'#001524',color:'#fff'}}
            icon={<FaComputer color='#00A9FF'/>}
            date='August 2021'>
            <h3 className='t-head'>Started learning C and C++</h3>
            <p style={{fontWeight:"300"}}>with object oriented programming and visual basics.</p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement className='vertical-timeline-element--education ll'
            iconStyle={{background:'#001524',color:'#fff'}}
            icon={<TbBrandJavascript color='#FAEF5D'/>}
            date='January 2022'>
            <div className='cont'>
            <h3 className='t-head'>Started Web development course</h3>
            <p style={{fontWeight:"300"}}>From Udemy and made my first project "Fresh Planet"</p>
            </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education'
            iconStyle={{background:'#001524',color:'#fff'}}
            icon={<FaReact color='#00A9FF'/>}
            date='June 2022'>
            <h3 className='t-head'>Web development course completion with curating projects here on..</h3>
            <p style={{fontWeight:"300"}}>Projects include Health Crisp, Covid Tracker etc</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education ll'
            iconStyle={{background:'#001524',color:'#fff'}}
            icon={<FaJava color='red'/>}
            date='January 2023'>
            <div className='cont'>
            <h3 className='t-head'>Started Apna College DSA course</h3>
            <p style={{fontWeight:"300"}}>To learn various data structures and making full stack projects on the side</p>
            </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education'
            iconStyle={{background:'#001524',color:'#fff'}}
            icon={<IoLogoAndroid color='lightgreen'/>}
            date='September 2023 onwards'>
            <h3 className='t-head'>Completion of DSA course + Learning Android development</h3>
            <p style={{fontWeight:"300"}}>Started to dive into Android with basic projects including "Speed Solver"</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education ll'
            iconStyle={{background:'#001524',color:'#fff'}}
            icon={<FaGraduationCap color='#00A9FF'/>}
            date='2022-2025'>
            <div className='cont'>
            <h3 className='t-head'>BTech Computer Science</h3>
            <p style={{fontWeight:"300"}}>From MIT-WPU. Current pursuing 3rd year with CGPA 8.43</p>
            </div>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
    </div>
  )
}

export default About
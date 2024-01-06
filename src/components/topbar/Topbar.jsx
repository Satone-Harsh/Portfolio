import "./Topbar.css"

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="wrapper">
          <div className="left">
          {/* <Lottie className='lottie' animationData={santa}/> */}
          </div>
          <div className="right">
            <a className="link" href="#work">Projects</a>
            <a className="link b" href="https://github.com/Satone-Harsh">GitHub</a>
            <a className="link b" href="#about">Timeline</a>
            <a className="link " href="#contact">Contact</a>
          </div>
        </div>
    </div>
  )
}

export default Topbar
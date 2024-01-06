import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {

    const[message,setMessage]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true);
    }

  return (
    <div className='contact' id='contact'>
        <h2 className='ctitle'>Contact.</h2>
        <div className='cleft'>
            {/* <img src='assets/shake.svg' alt=''/> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380.2832226177523!2d73.81592878980567!3d18.51110164087627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfbdb0707687%3A0x6b022f322f014eef!2s121%2F222%2C%20Late%20Ramji%20Dhondu%20Ghole%20Path%2C%20Ram%20Baug%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1704367103645!5m2!1sen!2sin" 
            width="600" height="450" className='map'
             allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        
        <div className='c-container'>

        <div className='cright2'>
            <a href='https://www.linkedin.com/in/harsh-satone-2b23ba214/'><img src='assets/link.png' className='logo'/></a>
            <a href='https://github.com/Satone-Harsh'><img src='assets/git.png' className='logo'/></a>
            <a href='https://www.youtube.com/@webwiser7'><img src='assets/yt.png' className='logo'/></a>
        </div>
        <div className='cright'>
            <form className='form' method='POST' action='https://formspree.io/f/mzbnbyzj'>
                <input type='email' name='email' placeholder='Email' required/>
                <textarea name='message' placeholder='Message' required></textarea>
                <button type='submit'>Send</button>
                {message && <span className='reply'>Thanks!  I'll reply ASAP :)</span>}
            </form>
        </div>
        <div className='cright2 b'>
            <a href='https://medium.com/@harshsatone2'><img src='assets/medium.png' className='logo'/></a>
            <a href='https://www.instagram.com/so_harsh_77/'><img src='assets/insta.png' className='logo'/></a>
            <a href='https://www.google.com/maps/contrib/117992945439243887253/@18.4960764,73.7875411,17z/data=!3m1!4b1?entry=ttu'><img src='assets/map.png' className='logo'/></a>            
        </div>
        </div>
    </div>
  )
}

export default Contact
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import mypic from './mypic.jpg';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
  useEffect(() => {
    const typed = new Typed(".text", {
      strings: ["Frontend Developer", "Web Developer", "Backend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link"><b>Portfolio</b></a>
          </div>
          <div className="navbarauto">
            <Link to={'/'}
            className="nav-link"><b>Home</b>
            </Link>
            <a className="nav-link">About</a>
            <ScrollLink to="skills-section" smooth={true} duration={500} offset={650} className="nav-link">Skill</ScrollLink>

            <a className="nav-link">Portfolio</a>
            <a className="nav-link">Contact</a>
            
          </div>
        </div>
      </nav>
      <div className="main" style={{ position: "absolute", top: "10rem", left: "15rem" }}>
        <div>
          <h1 style={{ color: "white" }}>Hi, it's <span style={{ color: "aqua" }}>Chandana</span></h1>
          <h3 className="text-animation" style={{ color: "white" }}>I'm a <span className="text"></span></h3>
          <span style={{ color: "white", fontSize: "large", letterSpacing: "1px" }}>
            <div>I'm a tech enthusiast, and my toolkit includes</div>
            <div>vibrant front-end technologies like React, Typescript,</div>
            <div>Javascript, and Tailwind CSS, paired with the</div>
            <div>solid back-end combo of Express.js and Node.js</div>
          </span>
        </div>
        <div className="home-img">
          <img src={mypic} alt="Chandana's Picture" style={{ cursor: "pointer" }} />
        </div>
      </div>

      <div className="icoo" style={{ position: "absolute", top: "25rem", left: "15rem", fontSize: "larger", display: "flex", gap: "1.5rem", boxShadow: "0 0 25px transparent", cursor: "pointer", borderRadius: "50%", padding: "0.5rem" }}>
        <a href="https://www.linkedin.com/in/s-chandana-16a5b72b4/" style={{ color: "inherit" }}>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/S-ChandanaSri" style={{ color: "inherit" }}>
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://facebook.com" style={{ color: "inherit" }}>
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://instagram.com" style={{ color: "inherit" }}>
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <br />

      <a href="https://www.linkedin.com/in/s-chandana-16a5b72b4/" style={{ position: "absolute", top: "28rem", left: "15.5rem", cursor: "pointer" }}>
        <button style={{ padding: "0.5rem 1rem", backgroundColor: "#00FFFF", cursor: "pointer" }}>Contact</button>
      </a>

<h3 style={{position:"absolute",top:"30.8rem",left:"15.5rem",color:"white"}}>CONTACT INFO</h3>
<div className='first' style={{position:"absolute",top:"34rem",left:"15.3rem"}}><i class="fa-solid fa-circle-chevron-right"></i> chandanaofficial8@gmail.com
            </div>
            <div className='second' style={{position:"absolute",top:"36rem",left:"15.5rem"}}><i class="fa-solid fa-phone-volume"></i>+91 7286934187</div>

      <Element name="skills-section">
      <Skills/>

      </Element>
      <Education/>

    

    <section style={{position: "absolute",top:"150rem",left:"40rem"}}>
      <h2 className="heading" style={{color: "#00FFFF",fontSize: "2rem"}}>EXPERIENCE</h2>


    </section>
    <Projects/>
<div className='footer'>

</div>
    
    </div>
  );
}

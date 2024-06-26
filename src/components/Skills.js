import React from 'react'

export default function Skills() {
  return (
    <div>
      <section style={{position: "absolute",top: "40rem",left: "10rem"}}>
      <div className="container1" id="skills">
        <h1 className="heading1" style={{color: "#00FFFF",fontSize: "2rem"}}>Skills</h1>
        <div className="technical-bars">
          <div className="bar">
            <div className="info"><i className='bx bxl-html5'></i>&nbsp;
              <span>HTML</span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info"><i className='bx bxl-css3'></i>&nbsp;
              <span>CSS</span>
            </div>
            <div className="progress-line css">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info"><i className='bx bxl-javascript'></i>&nbsp;
              <span>JavaScript</span>
            </div>
            <div className="progress-line javascript">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info"><i className='bx bxl-react'></i>&nbsp;
              <span>React</span>
            </div>
            <div className="progress-line react">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info"><i className='bx bxl-mongodb'></i>&nbsp;
              <span>MongoDB</span>
            </div>
            <div className="progress-line mongodb">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info"><i className='bx bxl-postgresql'></i>&nbsp;
              <span>MySql</span>
            </div>
            <div className="progress-line sql">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info"><i className='bx bxl-nodejs'></i>&nbsp;
              <span>NODEJS</span>
            </div>
            <div className="progress-line nodejs">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info"><i className='bx bxl-html5'></i>&nbsp;
              <span>ExpressJS</span>
            </div>
            <div className="progress-line expressjs">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info"><i className='bx bxl-bootstrap'></i>&nbsp;
              <span>Bootstrap</span>
            </div>
            <div className="progress-line bootstrap">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

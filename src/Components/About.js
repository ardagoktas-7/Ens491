import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    
    return (
      <section id="about">
        
        <Fade duration={1000}>
      
          <div className="row">
            <div>
                <h2>About Us</h2>
            </div>
            <div className="three columns">
              <img
                 className="profile-pic"
                 src="images/arda G.jpg"
                 alt="Arda Göktaş Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              

              <h2>Arda Göktaş</h2>
              <div className="row">
                <div className="columns contact-details">
                  <h1>Contact Details</h1>
                  <p className="address">
                    <span>Computer Science & Engineering BSC Student at Sabancı University</span>
                    <br />
                    <span>agoktas@sabanciuniv.edu</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="https://www.linkedin.com/in/arda-goktas-203523230/" className="button">
                      <i className="fa fa"></i>My LinkedIn Profile
                    </a>
                  </p>
                </div>
              </div>


            </div>
          </div>


          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="images/Irmak Ç.jpeg"
                alt="Irmak Çoban Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              

            <h2>Irmak Çoban</h2>
              <div className="row">
                <div className="columns contact-details">
                  <h1>Contact Details</h1>
                  <p className="address">
                    <span>Computer Science & Engineering BSC Student at Sabancı University</span>
                    <br />
                    <span>irmakcoban@sabanciuniv.edu</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="https://www.linkedin.com/in/%C4%B1rmak-%C3%A7oban-ab00091b8/?originalSubdomain=tr" className="button">
                      <i className="fa fa"></i>My LinkedIn Profile
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="images/Sergen H.jpeg"
                alt="Sergen Haysal Pic"
              />
            </div>
            <div className="nine columns main-col">
              
            <h2>M. Sergen Haysal</h2>
              <div className="row">
                <div className="columns contact-details">
                  <h1>Contact Details</h1>
                  <p className="address">
                    <span>Computer Science & Engineering BSC Student at Sabancı University</span>
                    <br />
                    <span>mustafasergen@sabanciuniv.edu</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="https://www.linkedin.com/in/mustafa-sergen-haysal-890aa018a/?originalSubdomain=tr" className="button">
                      <i className="fa fa"></i>My LinkedIn Profile
                    </a>
                  </p>
                </div>
              </div>


            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

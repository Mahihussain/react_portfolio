import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <h3>
          I'm Mahi and a <span>Software Engineer</span>
        </h3>
        <p>
          {" "}
          I'm very passionate and dedicated to my work. With 1 Year of
          experience as a professional Software Engineer. I've acquired the
          skills and knowledge necessary to make your project a success. I enjoy
          step of the project from discussion and collaboration.
        </p>
      </div>
      <div className="details">
        <div className="personal-info">
          <div className="info-item">
            <p>
              {" "}
              Birthday : <span> 28 February 1995 </span>{" "}
            </p>
          </div>
          <div className="info-item">
            <p>
              {" "}
              Degree : <span>Bsc in CSE</span>{" "}
            </p>
          </div>
          <div className="info-item">
            <p>
              {" "}
              Email : <span> mahihussain020@gmail.com </span>{" "}
            </p>
          </div>
          <div className="info-item">
            <p>
              {" "}
              Phone : <span>+8801688732729</span>{" "}
            </p>
          </div>
          <div className="info-item">
            <p>
              {" "}
              City : <span>Sylhet</span>{" "}
            </p>
          </div>
          <div className="info-item">
            <p>
              {" "}
              Country : <span>Bangladesh</span>{" "}
            </p>
          </div>
          <div className="buttons">
          <a href="" className="btn"> Download CV </a>
          <a href="" className="btn"> Hire Me </a>
        </div>
        </div>
        <div className="skills">
            <div className="skill-item"> 
              <h5> Javascript </h5>
              <div className='progress'>
                <div className="progress-in" style={{ width: '75%' }}> </div>
              </div>
              <div className="skill-percentage"> 75% </div>
            </div>

            <div className="skill-item"> 
              <h5> React js </h5>
              <div className='progress'>
                <div className="progress-in" style={{ width: '70%' }}> </div>
              </div>
              <div className="skill-percentage"> 70% </div>
            </div>

            <div className="skill-item"> 
              <h5> Bootstrap </h5>
              <div className='progress'>
                <div className="progress-in" style={{ width: '80%' }}> </div>
              </div>
                <div className="skill-percentage"> 80% </div>
            </div>

            <div className="skill-item"> 
              <h5> Express js </h5>
              <div className='progress'>
                <div className="progress-in" style={{ width: '60%' }}> </div>
              </div>
                <div className="skill-percentage"> 60% </div>
            </div>
        </div>
      </div>
        
    </div>
  );
};
export default About;

import React from "react";
import Mahi from "../Mahi.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () =>{
    return(<div className="home">
            <div className="intro">
                <img src={Mahi} alt="Mahi"/>
                <h3> Mahi Hussain </h3>
                <p> I'm a Software Engineer </p>
                <div className="social-links">
                <a href="#"> <FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/> </a>
                <a href="#"> <FontAwesomeIcon icon={['fab', 'whatsapp']} size="2x"/></a>
                <a href="#"> <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/></a>
                </div>
            </div>
    </div>);
}
export default Home;
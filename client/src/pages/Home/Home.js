import React from "react";
import image from "../../images/temp.svg";
import "./Home.css";
import Information from "../../components/Instructions/Instructions";
import Footer from "../../components/Footer/Footer";
import { Info } from "../../components/Instructions/Info";
import { Info2 } from "../../components/Instructions/Info";
import Typical from "react-typical";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Home = ({ shift }) => {
  return (
    <>
      <div className={shift ? "blur" : null}>
        <div className="home">
          <div className="main_container">
            <div className="main_content">
              <h1>MacEnroll</h1>
              <h2>Course Automation</h2>
              <Typical
                steps={[
                  "Automate Your Course Enrollment",
                  1000,
                  "Get Into Your Desired Courses",
                  1000,
                  "Let MacEnroll Handle The Stress",
                  1000,
                ]}
                loop={Infinity}
                wrapper="p"
              />

              <button className="main_btn" onClick="return false;">
                <a href="#section2">Get Started</a>
              </button>
            </div>
            <div className="main_img--container">
              <img src={image} alt="someImage" id="main_img"></img>
            </div>
          </div>
        </div>

        <Information {...Info} />
        <Information {...Info2} />
        <Footer />
      </div>
    </>
  );
};

export default Home;

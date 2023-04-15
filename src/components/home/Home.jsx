import React from "react";
import { FaTwitter, FaDribbble, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./home.css";
import Typical from "react-typical";
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-wrapper">
      <div className="home-container container">
        <p className="home-subtitle text-cs">
          Hello, <span>My Name Is</span>
        </p>
        <h1 className="home-title text-cs">
          <span>TARUN</span> ROY
        </h1>
        <p className="home-job">
          <span className="text-cs"></span> <b>
            <Typical
              loop={Infinity}
              steps={[
                'Full Stack Developer',
                1000,
                'Problem Solver ',
                1000,
                'Ethusiastic Developer',
                1000,
                'MERN Stack Developer',
                1000,
                'Node.js, MongoDB',
                1000
              ]}
            />
          </b>
        </p>
        <div className="home-img-wrapper">
          <div className="home-img"></div>
        </div>
        <p className="home-text">
          I'm a problem solver with expertise in C++, DSA and full-stack
          developer with expertise in HTML, CSS, JavaScript, MongoDB, React, and
          Node.js. I enjoy finding creative solutions to complex problems and
          have experience building robust and scalable applications using agile
          methodologies. I'm a motivated team player with excellent
          communication skills.
        </p>
        <div className="home-socials">
          <a href="https://www.linkedin.com/in/tarun-kumar-roy-524879210/" className="home-social-links">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/tarunroy500/" className="home-social-links">
            <SiLeetcode />
          </a>
          <a href="https://github.com/Tarunroy500" className="home-social-links">
            <FaGithub />
          </a>
          <a href="" className="home-social-links">
            <FaTwitter />
          </a>
        </div>
        <div className="home-btns">
          <a href="#" className="btn text-cs">
            <h1 className="text-cs">Download CV</h1>
          </a>
          <a href="" className="home-skills text-cs">
            My Skills
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};
export default Home;

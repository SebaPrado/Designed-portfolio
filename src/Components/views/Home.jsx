import React, { useState, useEffect } from "react";
import equalvision from "../../../public/equalFront.jpeg";
import alusur from "../../../public/alusur.jpeg";
import movie from "../../../public/fakeflix.jpeg";
import dashboard from "../../../public/equalAdmin.jpeg";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaArrowRight,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiInsomnia } from "react-icons/si";

function Home() {
  console.log("Renderizando componente Home");
  const techIcons = [
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3, name: "CSS" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "NodeJS" },
    { icon: SiRedux, name: "Redux" },
    { icon: FaBootstrap, name: "Bootstrap" },
    { icon: FaGitAlt, name: "Git" },
    { icon: FaGithub, name: "Github" },
    { icon: SiInsomnia, name: "Insomnia" },
    { icon: FaFigma, name: "Figma" },
  ];

  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const words = [" a twist", " designing view"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timer;

    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting ? 1 : -1;

      setDisplayedWord((prev) =>
        currentWord.substring(0, prev.length - shouldDelete)
      );

      if (!isDeleting && displayedWord === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedWord === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }

      timer = setTimeout(typeEffect, isDeleting ? 50 : 250);
    };

    timer = setTimeout(typeEffect, 100);

    return () => clearTimeout(timer);
  }, [displayedWord, isDeleting, wordIndex]);

  console.log(techIcons);
  return (
    <>
      <div className="">
        <section className="section1 containerLarge">
          <div className="h1Title">
            <h1 className="titulo-principal">
              A fullstack developer with{" "}
              <span className="changing-text">{displayedWord}</span>
            </h1>
          </div>

          <div className="section2">
            <div className="container2-1">
              <h5>Let's Talk</h5>
              <p>
                <a href="mailto:sebastian.pradomelesi@gmail.com">
                  sebastian.pradomelesi@gmail.com
                </a>
              </p>
            </div>
            <div className="container2-2">
              <p>
                Hello, I'm Sebastian, a fullstack developer focusing in React,
                NodeJs and WordPress. Closely related to designers, I will bring
                your idea into reality.
              </p>
            </div>
          </div>
        </section>
        <section className="section3 container">
          <div className="container3-1">
            <div className="titleH3">
              <h3>Projects</h3>
            </div>
            <div className="container3-3">
              <p>Explore some of my most recent work.</p>
            </div>
          </div>
          <div className="container3-4">
            <p className="more-projects-link">
              more <FaArrowRight style={{ marginLeft: "8px" }} />
            </p>
          </div>
        </section>
        <section className="sectionProjects container">
          <div className="column-container-s4">
            <div className="column-s4">
              <div className="column-content-s4">
                <img
                  className=" imageProject "
                  src={equalvision}
                  alt=" equalvision"
                />
              </div>
              <div className="column-footer-s4">
                <div className="projectsFlexItems">
                  {" "}
                  <h4>Equalvision e-commerce</h4>
                </div>

                <h5>Web development</h5>

                <p>
                  Practice E-commerce site featuring a public-facing section for
                  buyers built with React-Redux. The backend API is a RESTful
                  service built with Node.js, Express, Supabase and SQL.
                </p>
              </div>
            </div>
            <div className="column-s4">
              <div className="column-content-s4">
                <img className="imageProject" src={alusur} alt="alsur" />
              </div>
              <div className="column-footer-s4">
              <div className="projectsFlexItems">
                  {" "}
                  <h4>Alusur sa</h4>
                  <h5>Web development</h5>
                </div>
                <p>
                  Company dedicated to the efficient distribution and logistics
                  of aluminum architectural systems, profiles, and glass.This
                  project was developed using Node, JavaScript, and CSS
                </p>
              </div>
            </div>
            <div className="column-s4">
              <div className="column-content-s4">
                <img
                  className="imageProject"
                  src={dashboard}
                  alt=" dashboard"
                />
              </div>
              <div className="column-footer-s4">
              <div className="projectsFlexItems">
                  {" "}
                  <h4>Backend e-commerce</h4>
                  <h5>Web development</h5>
                </div>
                <p>
                  E-commerce dashboard site section for managing the site, built
                  with React-Redux. . The backend API is a RESTful service built
                  with Node.js, Express, Supabase and SQL.
                </p>
              </div>
            </div>
            <div className="column-s4">
              <div className="column-content-s4">
                <img className="imageProject" src={movie} alt=" movie" />
              </div>
              <div className="column-footer-s4">
              <div className="projectsFlexItems">
                  {" "}
                  <h4>Fakeflix</h4>
                  
                </div>
                <h5>Desktop app </h5>

                <p>
                  Fakeflix is a practice project designed to showcase an
                  engaging and user-friendly interface. It highlights the
                  ability to create a seamless browsing experience with
                  efficient data management This project was developed using
                  Node, JavaScript, and CSS, incorporating Express as the
                  framework and Redux for state management.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section5 container">
          <div className="titleH3">
            <h3>Expertise</h3>
          </div>
          <div className="ecpertiseFlexContainer">
            <div className="expertiseFlexItems">
              <h4>
                <span className="dot"></span>Branding
              </h4>
              <p>
                Collaborating closely, we'll develop an impactful brand identity
                for your emerging enterprise. The full spectrum of brand
                analysis and design is addressed, culminating in a visually
                stunning, evergreen logo concept.
              </p>
            </div>

            <div className="expertiseFlexItems">
              <h4>
                <span className="dot"></span>Development
              </h4>
              <p>
                I create user-friendly, adaptive, engaging websites. No
                cookie-cutters. No cumbersome, complex coding. Webflow forms the
                foundation of my web development approach. I employ it to
                produce safe, top-notch personalized websites.
              </p>
            </div>

            <div className="expertiseFlexItems">
              <h4>
                <span className="dot"></span>UI design
              </h4>
              <p>
                I create efficient, adaptable, and engaging websites. No
                predefined patterns. No sluggish, complex code. Webflow forms
                the foundation of my web development approach. I employ it to
                provide safe, top-notch bespoke websites.
              </p>
            </div>

            <div className="expertiseFlexItems">
              <h4>
                <span className="dot"></span>UX design
              </h4>
              <p>
                I comprehend and resolve digital product issues using a
                user-focused methodology. Investigation, compassion, and visual
                conveyance are a few techniques I apply to captivate and involve
                your users while fulfilling your business requirements.
              </p>
            </div>
          </div>
        </section>
        <section className="section-slider">
          <div className="slider-container">
            <div className="slider-icons">
              {techIcons.map((tech, index) => (
                <div key={index} className="slider-icon">
                  <tech.icon className="icon" />
                  <span className="icon-name">{tech.name}</span>
                </div>
              ))}
              {/* Duplicamos los iconos para crear un efecto de bucle infinito */}
              {techIcons.map((tech, index) => (
                <div key={`duplicate-${index}`} className="slider-icon">
                  <tech.icon className="icon" />
                  <span className="icon-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="section-testimonials container">
          <h3>Testimonials</h3>
          <div className="testimonialsFlexContainer">
            <div className="testimonialsFlexItems testimonial-content">
              <p>
                "Joey is a remarkable artist. He grasps abstract ideas and
                transforms them into exceptional visuals. Throughout the years,
                I've witnessed him produce everything from small symbols to
                comprehensive adaptive web pages. He has crafted clothing items
                like tees and caps, promotional products, and professional
                literature."
              </p>
            </div>
            <div className="testimonialsFlexItems testimonial-info">
              <div className="autor">
                <h6>Sebastian</h6>
                <p>Product Lead</p>
              </div>
            </div>
          </div>
        </section> */}
        <section className="section-lets-talk container">
          <div className="lets-talk-flexContainer">
            <div className="lets-talk-flexItem">
              <h2>Let's talk!</h2>
              <a
                href="mailto:sebastian.pradomelesi@gmail.com"
                className="email-button"
                onMouseEnter={(e) => (e.target.style.color = "orange")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                sebastian.pradomelesi@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

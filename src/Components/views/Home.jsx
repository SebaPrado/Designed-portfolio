import React from "react";
import equalvision from "../../../public/vinyl.jpg";
import alusur from "../../../public/alusurco.jpg";
import movie from "../../../public/popcorn.jpg";
import dashboard from "../../../public/dashboard.jpg";

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

  console.log(techIcons);
  return (
    <div className="container">
      <section className="section1">
        <h1 className="titulo-principal">
          {" "}
          A fullstack developer with a twist
        </h1>
      </section>
      <section className="section2">
        <div className="container2-1">
          <h5 style={{ fontSize: "24px", lineHeight: "130%" }}>Let's Talk</h5>
          <p>
            <a
              href="mailto:sebastian.pradomelesi@gmail.com"
              style={{
                color: "black",
                textDecoration: "underline",
                transition: "font-weight 0.3s ease",
                fontSize: "20px",
                lineHeight: "140%",
              }}
              onMouseEnter={(e) => (e.target.style.fontWeight = "bold")}
              onMouseLeave={(e) => (e.target.style.fontWeight = "normal")}
            >
              sebastian.pradomelesi@gmail.com
            </a>
          </p>
        </div>
        <div className="container2-2">
          <p style={{ fontSize: "20px", lineHeight: "140%" }}>
            Hello, I'm Sebastian, a fullstack developer focusing in React,
            NodeJs and WordPress. Closely related to designers, I will bring
            your idea into reality.
          </p>
        </div>
      </section>
      <section className="section3">
        <div className="container3-1">
          <div className="container3-2">
            <h3 style={{ fontSize: "48px", lineHeight: "120%" }}>Projects</h3>
          </div>
          <div className="container3-3">
            <p style={{ fontSize: "20px", lineHeight: "140%" }}>
              Explore some of my most recent work.
            </p>
          </div>
        </div>
        <div className="container3-4">
          <p
            style={{
              fontSize: "20px",
              lineHeight: "140%",
              margin: 0,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            more <FaArrowRight style={{ marginLeft: "8px" }} />
          </p>
        </div>
      </section>
      <section className="sectionProjects">
        <div className="column-container-s4">
          <div className="column-s4">
            <div className="column-content-s4">
              <img
                className="projectsImages"
                src={equalvision}
                alt=" equalvision"
              />
            </div>
            <div className="column-footer-s4">
              <h3>Equalvision e-commerce</h3>
              <p style={{ fontSize: "20px", lineHeight: "140%" }}>
                Practice E-commerce site featuring a public-facing section for
                buyers built with React-Redux. The backend API is a RESTful
                service built with Node.js, Express, Supabase and SQL.
              </p>
            </div>
          </div>
          <div className="column-s4">
            <div className="column-content-s4">
              <img className="projectsImages" src={alusur} alt="alsur" />
            </div>
            <div className="column-footer-s4">
              <h3>Alusur SA</h3>
              <p style={{ fontSize: "20px", lineHeight: "140%" }}>
                Company dedicated to the efficient distribution and logistics of
                aluminum architectural systems, profiles, and glass.This project
                was developed using Node, JavaScript, and CSS
              </p>
            </div>
          </div>
          <div className="column-s4">
            <div className="column-content-s4">
              <img
                className="projectsImages"
                src={dashboard}
                alt=" dashboard"
              />
            </div>
            <div className="column-footer-s4">
              <h3>Backend e-commerce</h3>
              <p style={{ fontSize: "20px", lineHeight: "140%" }}>
                E-commerce dashboard site section for managing the site, built
                with React-Redux. . The backend API is a RESTful service built
                with Node.js, Express, Supabase and SQL.
              </p>
            </div>
          </div>
          <div className="column-s4">
            <div className="column-content-s4">
              <img className="projectsImages" src={movie} alt=" movie" />
            </div>
            <div className="column-footer-s4">
              <h3>Fakeflix</h3>
              <p style={{ fontSize: "20px", lineHeight: "140%" }}>
                Fakeflix is a practice project designed to showcase an engaging
                and user-friendly interface. It highlights the ability to create
                a seamless browsing experience with efficient data management
                This project was developed using Node, JavaScript, and CSS,
                incorporating Express as the framework and Redux for state
                management.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section5">
        <h2 className="expertise-title">Expertise</h2>
        <div className="ecpertiseFlexContainer">
          <div className="expertiseFlexItems">
            <h4 style={{ fontSize: "32px", lineHeight: "130%" }}>
              <span className="dot"></span>Branding
            </h4>
            <p style={{ fontSize: "20px", lineHeight: "140%" }}>
              Collaborating closely, we'll develop an impactful brand identity
              for your emerging enterprise. The full spectrum of brand analysis
              and design is addressed, culminating in a visually stunning,
              evergreen logo concept.
            </p>
          </div>

          <div className="expertiseFlexItems">
            <h4 style={{ fontSize: "32px", lineHeight: "130%" }}>
              <span className="dot"></span>Development
            </h4>
            <p style={{ fontSize: "20px", lineHeight: "140%" }}>
              I create user-friendly, adaptive, engaging websites. No
              cookie-cutters. No cumbersome, complex coding. Webflow forms the
              foundation of my web development approach. I employ it to produce
              safe, top-notch personalized websites.
            </p>
          </div>

          <div className="expertiseFlexItems">
            <h4 style={{ fontSize: "32px", lineHeight: "130%" }}>
              <span className="dot"></span>UI design
            </h4>
            <p style={{ fontSize: "20px", lineHeight: "140%" }}>
              I create efficient, adaptable, and engaging websites. No
              predefined patterns. No sluggish, complex code. Webflow forms the
              foundation of my web development approach. I employ it to provide
              safe, top-notch bespoke websites.
            </p>
          </div>

          <div className="expertiseFlexItems">
            <h4 style={{ fontSize: "32px", lineHeight: "130%" }}>
              <span className="dot"></span>UX design
            </h4>
            <p style={{ fontSize: "20px", lineHeight: "140%" }}>
              I comprehend and resolve digital product issues using a
              user-focused methodology. Investigation, compassion, and visual
              conveyance are a few techniques I apply to captivate and involve
              your users while fulfilling your business requirements.
            </p>
          </div>
        </div>
      </section>
      <section
        className="section-slider"
        style={{
          width: "100vw",
          backgroundColor: "#f0f0f0",
          overflow: "hidden",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          paddingLeft: "calc(50vw - 50%)",
          paddingRight: "calc(50vw - 50%)",
        }}
      >
        <div
          className="slider-container"
          style={{ width: "100vw", marginLeft: "-50vw", marginRight: "-50vw" }}
        >
          <div
            className="slider-icons"
            style={{
              display: "flex",
              animation: "slide 20s linear infinite",
              width: "200%",
            }}
          >
            {techIcons.map((tech, index) => (
              <div
                key={index}
                className="slider-icon"
                style={{ margin: "0 20px" }}
              >
                <tech.icon className="icon" style={{ fontSize: "2rem" }} />
                <span className="icon-name">{tech.name}</span>
              </div>
            ))}
            {/* Duplicamos los iconos para crear un efecto de bucle infinito */}
            {techIcons.map((tech, index) => (
              <div
                key={`duplicate-${index}`}
                className="slider-icon"
                style={{ margin: "0 20px" }}
              >
                <tech.icon className="icon" style={{ fontSize: "2rem" }} />
                <span className="icon-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-testimonials">
        <h3 style={{ fontSize: "64px", lineHeight: "110%" }}>Testimonials</h3>
        <div className="testimonialsFlexContainer">
          <div
            className="testimonialsFlexItems testimonial-content"
            style={{ fontSize: "48px", lineHeight: "130%" }}
          >
            "Joey is a remarkable artist. He grasps abstract ideas and
            transforms them into exceptional visuals. Throughout the years, I've
            witnessed him produce everything from small symbols to comprehensive
            adaptive web pages. He has crafted clothing items like tees and
            caps, promotional products, and professional literature."
          </div>
          <div className="testimonialsFlexItems testimonial-info">
            <div className="autor">
              <h6>Sebastian</h6>
              <p>Product Lead</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-lets-talk">
        <div className="lets-talk-flexContainer">
          <div className="lets-talk-flexItem" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "140px", margin: "0", lineHeight: "1" }}>
              Let's talk!
            </h2>
            <a
              href="mailto:sebastian.pradomelesi@gmail.com"
              className="email-button"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px 20px",
                textDecoration: "none",
                borderRadius: "25px",
                display: "inline-block",
                marginTop: "20px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "black")}
            >
              sebastian.pradomelesi@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

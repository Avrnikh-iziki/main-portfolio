import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Three from "../threejs/Three";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Developer","Data Scientist"],
    });
  }, []);

  return (
    <>
      <div className="background" >
        <Three /> 
      </div>
      <div className="intro" id="intro" >
        <div className="left">
          <div className="imgContainer">
            <img src="https://res.cloudinary.com/avrnikh/image/upload/v1648302829/A_hglsjk.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper"> 
            <h2>Hi There, I'm</h2>
            <h1>Avrnikh Iziki</h1>
            <h3>
            <span ref={textRef}></span>
            </h3>
            <p>
            I'm an experienced  Software Developer  who constantly 
            seeks out innovative solutions to everyday problems. 
            In my three  years in this industry, I've honed my 
            analytical thinking and collaboration skills.
            </p>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
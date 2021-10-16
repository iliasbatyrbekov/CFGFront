import React from 'react';
import aboutImg from "../assets/about.png";
const fsImg = {
  width: "100vw",
  // height:"100vh"
}
const blackBG = {
  width: "100vw",
  height:"100vh",
  backgraoundColor:"black"
}
  
const About = () => {
  return (
    <div style={blackBG}>
      <img style={fsImg} src={aboutImg} alt="proble," />
    </div>
  );
};
  
export default About;
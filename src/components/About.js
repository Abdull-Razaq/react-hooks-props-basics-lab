import React from "react";
import Links from "../components/Links"



function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p> {props.bio}</p>
   
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github="https://github.com/" linkedin="https://www.linkedin.com/"/>

    </div>
  );
}

export default About;

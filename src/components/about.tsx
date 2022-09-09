import React from "react";
import Kai from "../images/kai-profile-pic.jpg";

export const About = () => (
  <>
    <div style={{ display: "flex" }}>
      <img src={Kai} style={{ height: "120px", paddingRight: "20px" }} />
      <div>
        <h1 style={{ }}>Hi, I'm Kai.</h1>
        <p>My pronouns are they / them.</p>
      </div>
    </div>
    <p>
      I'm a full stack software engineer. I like diving into why things work,
      and how to make <br />
      them work better for everyone.
    </p>
  </>
);

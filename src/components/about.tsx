import React from "react";
import Kai from "../images/kai-profile-pic-2.jpg";

export const About = () => (
  <>
    <div style={{ display: "flex" }}>
      <img src={Kai} style={{ height: "200px", paddingRight: "20px" }} />
      <div>
        <h1>Hi, I'm Kai.</h1>
        <p>My pronouns are they / he.</p>
        <p>
          I'm a full stack software engineer. I like diving into why things
          work, and how to make them work better for everyone.
        </p>
      </div>
    </div>
  </>
);

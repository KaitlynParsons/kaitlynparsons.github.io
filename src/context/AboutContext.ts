import { createContext } from "react";

export const aboutContext = {
    firstName: "kaitlyn",
    lastName: "parsons",
    title: "Software Engineer",
    about: "I'm a Software Engineer with a growth mindset who is genuinely passionate about technology and software development with 5+ years experience in financial services, business productivity software and customer relationship management systems."
  };

export const AboutContext = createContext(aboutContext);
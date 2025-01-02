import React from "react";

const About = () => {
  return (
    <section className="about py-10 bg-[#3E3E70]" id="about">
      <div className=" container mx-auto px-4">
        <h1 className="text-center text-white text-5xl font-bold mb-6 animate__animated animate__fadeIn">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">

          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl text-white font-mono mb-4 animate__animated animate__fadeInLeft">
              Hi, I’m Kaushal Rathod
            </h2>
            <p className="text-white mb-4 text-xl font-mono animate__animated animate__fadeInLeft">
              I am  Full-Stack Developer with a strong interest in
              creating dynamic and user-friendly applications. I thrive on
              challenges and constantly seek to learn and enhance my skills.
            </p>
            <p className="text-white mb-4 text-xl font-mono animate__animated animate__fadeInLeft">
              With a background in both front-end and back-end development, I
              enjoy building seamless user experiences that connect people and
              enhance their online interactions.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

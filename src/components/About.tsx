import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
          alt="Emil's headshot"
          className="w-64 h-64 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <p className="text-lg mb-4">
            Hello! I'm Emil, a passionate web developer with a keen interest in creating
            user-friendly and efficient web applications. My background in computer science
            and my experience in various programming languages have shaped my approach to
            problem-solving and innovation in the tech world.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to
            open-source projects, or enjoying outdoor activities. My career goal is to
            continue growing as a full-stack developer and eventually lead teams in creating
            impactful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
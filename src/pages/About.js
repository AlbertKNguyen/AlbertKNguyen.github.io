import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';

function About(props) {
  const textStyle = {
    fontFamily: 'Consolas', 
    marginTop: '0px',
    marginLeft: '5px',
    marginRight: '5px',
    whiteSpace: 'pre-line',
    fontSize: '1.5em'
  };

  useEffect(() => {
    // Update document title
    document.title = 'Albert Nguyen | About';
  });


  return (
    <div style={props.style}>
      <PageHeader title='About' isDesktop={props.isDesktop} />
      <p style={textStyle}>
        Hello, welcome to my site! I'm Albert and I love to code.
        To me, coding is like playing a puzzle game: engaging and fun.
        I believe my joy for code combined with my knack for problem-solving and constant passion to learn makes me a great software engineer.{"\n"}{"\n"}
  
        My experience includes interning and working part-time as a software engineer at Sweep Energy (startup).{"\n"}{"\n"}

        I am currently looking for opportunities to expand my career as a frontend/full-stack engineer.{"\n"}{"\n"}

        Links:{"\n"}
        <a href="/resume.pdf">Resume</a>{"\n"}
        <a href="https://www.linkedin.com/in/albert-nguyen-b268b8170">Linkedin</a>
      </p>
    </div>
  );
}

export default About;
import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import '../App.css';

function About(props) {
  useEffect(() => {
    // Update document title
    document.title = 'Albert Nguyen | About';
  });

  return (
    <div style={props.style}>
      <PageHeader title='About' isDesktop={props.isDesktop} />
      <div className='contentScroll'>
        <p className='textStyle' style={{ fontSize: '1.5em' }}>
          Hello, welcome to my site! I'm Albert and I love to code. To me,
          coding is like playing a puzzle game: engaging and fun. That is why I
          am always looking to improve my skills and tackle new exciting
          challenges.
          {'\n'}
          {'\n'}I am currently a software engineer at BAE Systems.{'\n'}
          {'\n'}
          Links:{'\n'}
          <a href='/resume.pdf'>Resume</a>
          {'\n'}
          <a href='https://www.linkedin.com/in/albert-nguyen-b268b8170/'>
            Linkedin
          </a>
          {'\n'}
          <a href='https://github.com/AlbertKNguyen'>GitHub</a>
        </p>
      </div>
    </div>
  );
}

export default About;

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
          Hey, I'm Albert, a software engineer who loves to build. I get a lot
          of satisfaction from taking on hard problems and seeing them through
          to a working solution. I especially enjoy owning products end to end, from the
          first line of code to the final experience a user gets. That's what
          keeps me pushing to learn more and take on bigger challenges.
          {'\n'}
          {'\n'}I am currently a Senior Full-Stack Software Engineer at Teambridge.{'\n'}
          {'\n'}
          Links:{'\n'}
          <a href='/resume.pdf'>Resume</a>
          {'\n'}
          <a href='https://www.linkedin.com/in/albertkn37/'>
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

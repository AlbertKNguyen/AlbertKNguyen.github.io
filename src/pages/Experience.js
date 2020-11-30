import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { Card } from 'semantic-ui-react'

function Experience(props) {
  const cardStyle = {
    backgroundColor: '#1E1E1E',
    marginTop: '5px',
  }

  useEffect(() => {
    // Update document title
    document.title = 'Albert Nguyen | Experience';
  });

  return (
    <div style={props.style}>
      <PageHeader title='Experience' isDesktop={props.isDesktop} />
      <Card.Group centered itemsPerRow={1} style={{ marginTop: '5px', overflowX: 'hidden', overflowY: 'auto', height: 'calc(100% - 50px)' }}>
        <Card style={cardStyle}>
          <Card.Content>
            <Card.Header style={{ color: '#F4F4F4' }} content='Sweep Energy | Software Engineer' />
            <Card.Meta style={{ color: '#A4A4A4' }} content='September 2019 - Current' />
            <Card.Description style={{ color: '#D4D4D4' }}>
              As a part-time software engineer, I was able to take on a bigger role in the company meanwhile balancing schoolwork during my schoolyear.
              I was mainly tasked with the design and development of the front-end architecture and views for the hybrid app using Angular and Ionic.
              Some of the main things I have built or contributed to were the login system, directory system, data charts, and many complex reactive forms.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card style={cardStyle}>
          <Card.Content>
            <Card.Header style={{ color: '#F4F4F4' }} content='Sweep Energy | Software Engineer Intern' />
            <Card.Meta style={{ color: '#A4A4A4' }} content='July 2019 - August 2019' />
            <Card.Description style={{ color: '#D4D4D4' }}>
              As an intern, I implemented and configured the Electron desktop app. 
              This involved fine-tuning the code and configuration that would allow the app to be compatible across both Windows and macOS.
              I also developed and optimized the API Gateway using Node.js.
              </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

export default Experience;
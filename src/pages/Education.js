import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { Grid } from 'semantic-ui-react';
import '../App.css';

function Education(props) {
  useEffect(() => {
    // Update document title
    document.title = 'Albert Nguyen | Education';
  });

  return (
    <div style={props.style}>
      <PageHeader title='Education' isDesktop={props.isDesktop} />
      <div className='contentScroll'>
        <h1 className='textStyle'>
          School: <span>University of California, Merced</span>
          {'\n'}
          Program: <span>BS in Computer Science and Engineering</span>
          {'\n'}
          Major GPA: <span>3.28</span>
          {'\n'}
          Relevant Coursework:
        </h1>
        <h3 className='textStyle'>
          <Grid style={{ fontWeight: 'normal' }}>
            <Grid.Row style={{ marginTop: '-10px' }}>
              <Grid.Column width={8}>Software Engineering</Grid.Column>
              <Grid.Column width={8}>Data Structures</Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '-10px' }}>
              <Grid.Column width={8}>Algorithm Design and Analysis</Grid.Column>
              <Grid.Column width={8}>Computer Architecture</Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '-10px' }}>
              <Grid.Column width={8}>Operating Systems</Grid.Column>
              <Grid.Column width={8}>Computer Networks</Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '-10px' }}>
              <Grid.Column width={8}>Python Programming</Grid.Column>
              <Grid.Column width={8}>
                Intro to Object-Oriented Programming
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '-10px' }}>
              <Grid.Column width={8}>Computer Organization</Grid.Column>
              <Grid.Column width={8}>
                Intro to Artificial Intelligence
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '-10px' }}>
              <Grid.Column width={8}>Discrete Mathematics</Grid.Column>
              <Grid.Column width={8}>Intro to Computer Vision</Grid.Column>
            </Grid.Row>
          </Grid>
        </h3>
      </div>
    </div>
  );
}

export default Education;

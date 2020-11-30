import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { Grid } from 'semantic-ui-react';


function Education(props) {
  const textStyle = {
    fontFamily: 'Consolas',
    marginTop: '0px',
    marginLeft: '5px',
    marginRight: '5px',
    whiteSpace: 'pre-line',
  };

  useEffect(() => {
    // Update document title
    document.title = 'Albert Nguyen | Education';
  });


  return (
    <div style={props.style}>
      <PageHeader title='Education' isDesktop={props.isDesktop} />
      <div style={{ overflowX: 'hidden', overflowY: 'auto', height: 'calc(100% - 50px)' }}>
        <h1 style={textStyle}>
          School: <span>University of California, Merced</span>{"\n"}
          Program: <span>BS in Computer Science and Engineering</span>{"\n"}
          Major GPA: <span>3.28</span>{"\n"}
          Relevant Coursework:
        </h1>
        <h3 style={textStyle}>
          <Grid style={{ fontWeight: 'normal' }}>
            <Grid.Row style={{ marginTop: '-10px' }}>
              <Grid.Column width={8}>
                Software Engineering
            </Grid.Column>
              <Grid.Column width={8}>
                Data Structures
            </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '-10px' }}>
              <Grid.Column width={8}>
                Algorithm Design and Analysis
            </Grid.Column>
              <Grid.Column width={8}>
                Computer Architecture
            </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '-10px' }}>
              <Grid.Column width={8}>
                Operating Systems
            </Grid.Column>
              <Grid.Column width={8}>
                Computer Networks
            </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '-10px' }}>
              <Grid.Column width={8}>
                Python Programming
            </Grid.Column>
              <Grid.Column width={8}>
                Intro to Object-Oriented Programming
            </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '-10px' }}>
              <Grid.Column width={8}>
                Computer Organization
            </Grid.Column>
              <Grid.Column width={8}>
                Intro to Artificial Intelligence
            </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginTop: '-10px' }}>
              <Grid.Column width={8}>
                Discrete Mathematics
            </Grid.Column>
              <Grid.Column width={8}>
                Intro to Computer Vision
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </h3>
      </div>
    </div>
  );
}

export default Education;
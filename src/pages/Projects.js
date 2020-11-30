import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { Card } from 'semantic-ui-react'
import axios from 'axios';


function Projects(props) {
  const [repoList, setRepoList] = useState([]);
  const textStyle = {
    fontFamily: 'Consolas',
    marginTop: '0px',
    marginLeft: '5px',
    marginRight: '5px',
    whiteSpace: 'pre-line',
  }
  const cardStyle = {
    backgroundColor: '#1E1E1E',
    marginTop: '-5px',
    marginLeft: '10px',
    marginRight: '10px',
    wordWrap: 'break-word'
  }

  useEffect(() => {
    // Update document title
    document.title = 'Albert Nguyen | Projects';

    async function getGithubRepoList() {
      try {
        const result = await axios.get('https://api.github.com/users/AlbertKNguyen/repos');
        setRepoList(result.data);
      } catch (error) {
        console.log('error', error);
      }
    }
    getGithubRepoList();
  }, []);

  return (
    <div style={props.style}>
      <PageHeader title='Projects' isDesktop={props.isDesktop} />
      <div style={{ overflowX: 'hidden', overflowY: 'auto', height: 'calc(100% - 50px)' }}>
        <h2 style={textStyle}> Projects are still in the works... But feel free to check out my <a href="https://github.com/AlbertKNguyen">Github</a></h2>
        <Card.Group centered itemsPerRow={3} style={{ marginTop: '5px' }}>
          {repoList.map(repo => (
            <Card key={repo.id} href={'https://github.com/AlbertKNguyen/' + repo.name} style={cardStyle}>
              <Card.Content>
                <Card.Header style={{ color: '#F4F4F4' }} content={repo.name} />
                <Card.Description style={{ color: '#D4D4D4' }} content={repo.description} />
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </div>
    </div>
  );
}

export default Projects;
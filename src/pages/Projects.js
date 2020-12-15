import React, { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { Card, Loader } from 'semantic-ui-react'
import axios from 'axios';
import '../App.css';

const cardStyle = {
  backgroundColor: '#1E1E1E',
  marginTop: '-5px',
  marginLeft: '10px',
  marginRight: '10px',
  wordWrap: 'break-word'
}

function Projects(props) {
  const [repoList, setRepoList] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    // Update document title
    document.title = 'Albert Nguyen | Projects';

    const getGithubRepoList = async () => {
      setLoading(true);
      try {
        const result = await axios.get('https://api.github.com/users/AlbertKNguyen/repos');
        setRepoList(result.data);
      } catch (error) {
        console.log('error', error);
      }
      setLoading(false);
    }
    getGithubRepoList();
  }, []);

  return (
    <div style={props.style}>
      <PageHeader title='Projects' isDesktop={props.isDesktop} />
      <div className='contentScroll'>
        <h2 className='textStyle'>My current ongoing project: <a href="https://whodelivers.app">https://whodelivers.app</a></h2>
        <h2 className='textStyle'>My <a href="https://github.com/AlbertKNguyen">Github</a>:</h2>
        <Card.Group centered itemsPerRow={3} style={{ marginTop: '5px' }}>
          {!loading ? repoList.map(repo => (
            <Card key={repo.id} href={'https://github.com/AlbertKNguyen/' + repo.name} style={cardStyle}>
              <Card.Content>
                <Card.Header style={{ color: '#F4F4F4' }} content={repo.name} />
                <Card.Description style={{ color: '#D4D4D4' }} content={repo.description} />
              </Card.Content>
            </Card>
          )) :
            <Loader active>Github repositories loading...</Loader>
          }
        </Card.Group>
      </div>
    </div>
  );
}

export default Projects;
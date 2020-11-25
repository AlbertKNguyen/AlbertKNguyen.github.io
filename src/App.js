import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import Navmenu from './components/Navmenu';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Background from './assets/background.jpg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })
  const backgroundImage = {
    background: `url(${Background}) no-repeat center center fixed`,
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    maxHeight: '100vh',
    overflow: 'hidden',
  }
  const pageStyle = {
    margin: 'auto',
    maxWidth: '60vw',
    maxHeight: '60vh',
    width: '960px',
    height: '540px',
    overflowY: 'auto',
    overflowX: 'hidden',
    boxShadow: '10px 10px 8px #888888',
    color: '#D4D4D4',
    backgroundColor: '#1E1E1E'
  }
  if (!isDesktop) {
    pageStyle.width = '100vw';
    pageStyle.height = '100vh';
    pageStyle.maxWidth = '100vw';
    pageStyle.maxHeight = '100vh';
  }

  const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="animation" timeout={500}>
        <Switch location={location}>
          <Route path='/about'>
            <About style={pageStyle} isDesktop={isDesktop} />
          </Route>
          <Route path='/experience'>
            <Experience style={pageStyle} isDesktop={isDesktop} />
          </Route>
          <Route path='/education'>
            <Education style={pageStyle} isDesktop={isDesktop} />
          </Route>
          <Route path='/projects'>
            <Projects style={pageStyle} isDesktop={isDesktop} />
          </Route>
          <Route path='/'>
            <Redirect to='/about'/>
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

  return (
    <div style={backgroundImage}>
      {isDesktop &&
        <Router>
          <div style={{
            margin: 'auto',
            display: 'flex',
            maxWidth: '80vw',
            maxHeight: '65vh',
            width: '1200px',
            height: '540px',
            marginTop: '25vh'
          }}>
            <Navmenu isDesktop={isDesktop} />
            <AnimatedSwitch />
          </div>
        </Router>
      }
      {!isDesktop &&
        <Router>
          <AnimatedSwitch />
        </Router>
      }
    </div>
  );
}

export default App;

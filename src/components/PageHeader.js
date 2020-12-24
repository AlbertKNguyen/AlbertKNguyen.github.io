import React from 'react';
import { Icon, Header } from 'semantic-ui-react';
import Navmenu from './Navmenu';

function PageHeader(props) {
  return (
    <>
      {props.isDesktop &&
        <Header
          as='h2'
          align='center'
          style={{ height: '50px', backgroundColor: '#808080', color: 'white', marginBottom: '0px' }}>
          <Header.Content style={{ marginLeft: '105px', marginTop: '12px' }}>
            {props.title}
          </Header.Content>
          <Header.Content style={{ marginTop: '12px', float: 'right' }}>
            <Icon style={{ transform: 'translateY(-35%)', marginRight: '10px' }} name='window minimize outline' />
            <Icon name='square outline' />
            <Icon style={{ marginRight: '8px' }} name='close' />
          </Header.Content>
        </Header>
      }
      {!props.isDesktop &&
        <Header
          as='h2'
          align='center'
          style={{ height: '50px', backgroundColor: '#808080', color: 'white', marginBottom: '0px' }}>
          <Header.Content style={{ marginLeft: '2px', marginTop: '12px', float: 'left' }}>
            <Navmenu />
          </Header.Content>
          <Header.Content style={{ marginLeft: '60px', marginTop: '12px' }}>
            {props.title}
          </Header.Content>
          <Header.Content style={{ marginTop: '12px', float: 'right' }}>
            <Icon style={{ transform: 'translateY(-35%)', marginRight: '10px' }} name='window minimize outline' />
            <Icon name='square outline' />
            <Icon style={{ marginRight: '8px' }} name='close' />
          </Header.Content>
        </Header>
      }
    </>
  );
}

export default PageHeader;
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Icon, Sidebar } from 'semantic-ui-react';

function Navmenu(props) {
  const [visible, setVisible] = React.useState(false);
  const menuItemStyle = {
    paddingTop: '1vmin',
    fontSize: '2em'
  };
  const locationPath = useLocation().pathname.slice(1);
  const handleItemClick = (e, { name }) => {
    if (locationPath === `${name}`) {
      e.preventDefault();
    }
  }

  return (
    <div>
      {props.isDesktop &&
        <Menu text vertical style={{ background: 'transparent', boxShadow: 'none' }}>
          <Menu.Item header style={menuItemStyle}>Albert Nguyen</Menu.Item>
          <Menu.Item
            as={NavLink} to='/about'
            name='about'
            onClick={handleItemClick}
            style={menuItemStyle}>
          </Menu.Item>
          <Menu.Item
            as={NavLink} to='/experience'
            name='experience'
            onClick={handleItemClick}
            style={menuItemStyle}>
          </Menu.Item>
          <Menu.Item
            as={NavLink} to='/education'
            name='education'
            onClick={handleItemClick}
            style={menuItemStyle}>
          </Menu.Item>
          <Menu.Item
            as={NavLink} to='/projects'
            name='projects'
            onClick={handleItemClick}
            style={menuItemStyle}>
          </Menu.Item>
        </Menu>
      }
      {!props.isDesktop &&
        <div>
          <Icon style={{ fontSize: '35px', background: 'transparent' }}
            name='bars'
            onClick={() => setVisible(true)}
          />
          <Sidebar
            as={Menu}
            animation='scale down'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item header style={menuItemStyle}>Albert Nguyen</Menu.Item>
            <Menu.Item
              as={NavLink} to='/about'
              name='about'
              onClick={handleItemClick}
              style={menuItemStyle}
              fitted='horizontally'>
            </Menu.Item>
            <Menu.Item
              as={NavLink} to='/experience'
              name='experience'
              onClick={handleItemClick}
              style={menuItemStyle}
              fitted='horizontally'>
            </Menu.Item>
            <Menu.Item
              as={NavLink} to='/education'
              name='education'
              onClick={handleItemClick}
              style={menuItemStyle}
              fitted='horizontally'>
            </Menu.Item>
            <Menu.Item
              as={NavLink} to='/projects'
              name='projects'
              onClick={handleItemClick}
              style={menuItemStyle}
              fitted='horizontally'>
            </Menu.Item>
          </Sidebar>
        </div>
      }
    </div >
  );
}

export default Navmenu;
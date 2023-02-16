import React from 'react';
import { Menu, Layout, theme, Button } from 'antd';
import type { MenuProps } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const { Header } = Layout;

export const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();
  const localeSotore = localStorage.getItem('userData');

  const handleClick = () => {
    localStorage.removeItem('userData');
    navigate('/');
  };

  return (
    <StyledHeader>

      {!localeSotore ? (
        <Menu mode='horizontal'>
          <Menu.Item key='login'>
            <Link to='/login'>
              <span className='nav-text'>Login or Register</span>
            </Link>
          </Menu.Item>
        </Menu>
      ) : (
        <Menu mode='horizontal'>
          <Menu.Item key='users'>
            <Link to='/users'>
              <span className='nav-text'>Users</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='tasks'>
            <Link to='/tasks'>
              <span className='nav-text'>Tasks</span>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Button type='primary' danger onClick={handleClick}>Logout</Button>
          </Menu.Item>
        </Menu>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: flex-end;
  background-color: #fff !important;

  ul {
    width: 250px;
  }
`;

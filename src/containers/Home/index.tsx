import React from 'react';
import styled from 'styled-components';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import { HeaderComponent, FooterComponent } from '../components';

const { Content } = Layout;
// import {Info} from '../components';
// import {Orders} from '../containers'

interface IProps {
}

export const Home: React.FC<IProps> = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <StyledLayout>
      <HeaderComponent />
      <StyledContent>
        <div
          className='site-layout-content'
        >
          Content
        </div>
      </StyledContent>
      <FooterComponent />
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  min-width: 1200px;
`;

const StyledContent = styled(Content)`
  height: 100vh;
  padding: 0 50px;
`;

import React from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

export const FooterComponent: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>Task Management ©2023</Footer>
  )
}

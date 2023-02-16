import React from 'react';
import { Tabs } from 'antd';

import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

const onChange = (key: string) => {
};

export const Login: React.FC = () => (
  <Tabs
    defaultActiveKey='1'
    onChange={onChange}
    items={[
      {
        label: `Sign in`,
        key: '1',
        children: <SignIn />,
      },
      {
        label: `Sign up`,
        key: '2',
        children: <SignUp />,
      },
    ]}
  />
);

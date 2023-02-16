import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form, Input, InputNumber } from 'antd';
import styled from 'styled-components';
import { v4 } from 'uuid';

import { RootState } from '../../../store';
import { UserRegister } from '../../../store/auth';
import { Loading } from '../../../components';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};
/* eslint-enable no-template-curly-in-string */

export const SignUp: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //loading
  const allLoading = useSelector((state: RootState) => state.loadings);

  const onFinish = (values: any) => {
    const setValue = {
      ...values,
      id: v4(),
      isAdmin: false,
      users: [],
    };
    // @ts-ignore
    dispatch(UserRegister(setValue));
  };

  return (
    <React.Fragment>
      <Loading loading={
        allLoading?.isLoading
      } />
      <StyledForm {...layout} name='nest-messages' onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name='orginzationName' label='Orginzation Name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='phoneNumber' label='Phone number' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='address' label='Address'>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name='userName' label='User name'>
          <Input />
        </Form.Item>
        <Form.Item name='email' label='Email' rules={[{ type: 'email', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          rules={[{ required: true }]}
          hasFeedback
        >
          <Input.Password minLength={6} />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </StyledForm>
    </React.Fragment>
  );
};


const StyledForm = styled(Form)`
  min-width: 400px;
`;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';

import { RootState } from '../../../store';
import { UserLogin } from '../../../store/auth';
import { Loading } from '../../../components';

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};
/* eslint-enable no-template-curly-in-string */

export const SignIn: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state: RootState) => state.login.userData);
  //loading
  const allLoading = useSelector((state: RootState) => state.loadings);

  const onFinish = (values: any) => {
    // @ts-ignore
    dispatch(UserLogin(values));
  };

  useEffect(() => {
    Object.keys(userData).length !== 0 && navigate('/')
  }, [userData])

  return (
    <React.Fragment>
      <Loading loading={
        allLoading?.isLoading
      } />
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
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

        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};


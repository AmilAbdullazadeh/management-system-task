import React, {useEffect, useState, useRef, memo, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate, Link} from "react-router-dom";
import plusIcon from "../../assets/icons/plus-circle.svg";
import {RootState} from "../../store";
import {UserData} from "../../store/users";
import {Loading} from "../../components";
import {Button} from "../../components/styled";
import {Space, Table, Tag} from 'antd';
import styled from "styled-components";

export const Users = memo(() => {
  const dispatch = useDispatch()
  const didMountRef = useRef()

  const [reload, setReload] = useState<boolean>(false)
  const [users, setUsers] = useState([])

  let userData = useSelector((state: RootState) => state.users.userData)
  const errorUser = useSelector((state: RootState) => state.users.error)
  //loading
  const allLoading = useSelector((state: RootState) => state.loadings);

  interface DataType {
    id: string
    name: string
    surname: string
    email: string
    password: string
    tasks: string[]
  }

  useEffect(() => {
    if (errorUser) {
      // @ts-ignore
      toast.error(errorUser, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }, [errorUser])

  useEffect(() => {
    // @ts-ignore
    dispatch(UserData())

    if (!navigator.onLine) {
      toast.error('No Internet Connection', {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }, [reload])

  // id: string
  // name: string
  // surname: string
  // email: string
  // password: string
  // tasks: string[]

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
      key: 'surname'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    // {
    //   title: 'tasks',
    //   dataIndex: 'tasks',
    //   key: 'tasks',
    //   render: (tasks: string) => {
    //     let color = status === 'completed' ? 'green' : status === 'uncompleted' ? 'geekblue' : 'volcano';
    //     return (
    //       <span>
    //                 <Tag color={color}>
    //                      {status.toUpperCase()}
    //                 </Tag>
    //           </span>
    //     )
    //   }
    // },
  ]

  useEffect(() => {
    //ref vasitəsi ilə ilk renderin qarşısını alırıq
    if (didMountRef.current) {
      const usersData = userData?.map((user, idx) => {
        const {
          id,
          name,
          surname,
          email,
          password,
          // tasks
        } = user;
        return ({
          key: id,
          name: name,
          surname: surname,
          email: email,
          password: password,
          // tasks: tasks,
        })
      })
      Promise.all(usersData).then(function (results) {
        // results.sort((a, b) => a.status.localeCompare(b.status));
        // @ts-ignore
        return setUsers(results);
      })
    } else {
      // @ts-ignore
      didMountRef.current = true;
    }
  }, [userData])

  return (
    <React.Fragment>
      <Loading loading={
        allLoading?.isLoading
      }/>
      <StyledTableHeader><Link to='user/new'><img src={plusIcon} alt="plus icon"/> <span>Create new user</span></Link></StyledTableHeader>
      <Table columns={columns} dataSource={users}/>
      {!localStorage.getItem('AllData') && <Button onClick={() => setReload(!reload)}>Tap to reload</Button>}
      <ToastContainer/>
    </React.Fragment>
  )
})

export const StyledButton = styled(Link)`
  buser: none;
  padding: 10px 25px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  buser-radius: 6px;
  color: #fff;
  background-color: #1677ff;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  transition: all linear .35s;

  &:hover {
    opacity: .7;
  }
`

export const StyledTableHeader = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    margin-bottom: 2px;
  }

  a {
    buser: none;
    padding: 15px 10px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    buser-radius: 6px;
    color: #fff;
    background-color: green;
    box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
    transition: all linear .35s;
    text-decoration: none;
    display: flex;
    align-items: center;
    column-gap: 7px;

    &:hover {
      opacity: .7;
    }
  }
`

// import required essentials
const express = require('express');
const { statuses } = require('./static-mocks');
// create new router
const router = express.Router();

// create a JSON data array
const tasks = [
  {
    id: '45@#9089&3_5#$',
    // users: [
    //     users[1],
    //     users[0]
    // ],
    title: 'Login UI',
    description: 'Create modern Internet Banking UI for Login page',
    deadline: '25-01-2023',
    status: statuses[0],
  },
  {
    id: 'sd34_234+#089',
    // users: [
    //     users[1]
    // ],
    title: 'Sign-up UI',
    description: 'Create modern Internet Banking UI for Sign-up page',
    deadline: '12-02-2023',
    status: statuses[1],
  },
];

const users = [
  {
    id: '2@13dfsgsdf_234',
    name: 'Ebulfez',
    surname: 'Elbeyov',
    email: 'ebulfez@mc.az',
    password: 'ebulfez@',
    tasks: [
      tasks[0],
      tasks[1],
    ],
  },
  {
    id: '2@13dfsgsdf_234',
    name: 'Elgun',
    surname: 'Elyrov',
    email: 'elgun@mc.az',
    password: 'elgun@',
    tasks: [
      tasks[1],
    ],
  },
];

const data = [
  {
    id: '1',
    orginzationName: 'MC LLC',
    phoneNumber: '0704400500',
    address: 'Yasamal Xray.',
    userName: 'Amil Abdullayev',
    email: 'amila@mc.az',
    password: 'amil95@',
    isAdmin: true,
    users: users,
  },
];

async function getData(req, res) {
  res.status(200).json(data);
}

async function getFindedData(req, res) {
  // find an object from `data` array match by `id`
  let found = data.find(function(item) {
    return item.id === parseInt(req.params.id);
  });
  // if object found return an object else return 404 not-found
  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
}

async function login(req, res) {
  let foundInOrginzation = data.find(function(item) {
    return item.email === req.body.email;
  });
  let foundInUsers = Object.assign({}, ...data.map(item => item.users.find(user => {
    return user.email === req.body.email;
  })));

  if (!foundInOrginzation && !foundInUsers) {
    return res.status(404).send({ message: 'User Not found.' });
  }

  const passwordIsValid = (password) => {
    return password === req.body.password;
  };

  const passIsValid = (passwordIsValid(foundInOrginzation?.password) || passwordIsValid(foundInUsers?.password));

  if (!passIsValid) {
    return res.status(401).send({
      message: 'Invalid Password!',
    });
  }

  if (foundInOrginzation) {
    res.status(200).json(foundInOrginzation);
  } else if (foundInUsers) {
    res.status(200).json(foundInUsers);
  } else {
    res.sendStatus(404);
  }
}

async function register(req, res) {
  data.push(req.body);

  res.status(201).json(req.body);
}

async function getUsers(req, res) {
  res.status(200).json(users);
}

async function createUser(req, res) {
  users.push(req.body);

  res.status(201).json(req.body);
}

module.exports = {
  getData,
  getFindedData,
  login,
  register,
  getUsers,
  createUser
};

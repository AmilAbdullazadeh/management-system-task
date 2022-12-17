// import required essentials
const express = require('express');
const {statuses} = require('./static-mocks')
// create new router
const router = express.Router();

// create a JSON data array
const organizations = [
    {
        id: '1',
        orginzationName: "MC LLC",
        phoneNumber: "0704400500",
        address: "Yasamal Xray.",
        userName: "Amil Abdullayev",
        email: "amila@mc.az",
        password: "amil@",
        isAdmin: true,
        users: users
    }
]

const users = [
    {
        id: '2@13dfsgsdf_234',
        name: 'Ebulfez',
        surname: 'Elbeyov',
        email: 'ebulfez@mc.az',
        password: 'ebulfez@',
        // tasks: [
        //     tasks[0],
        // ]
    },
    {
        id: '2@13dfsgsdf_234',
        name: 'Elgun',
        surname: 'Elyrov',
        email: 'elgun@mc.az',
        password: 'elgun@'
    }
]


const tasks = [
    {
        id: '45@#9089&3_5#$',
        users: [
            users[1],
            users[0]
        ],
        title: 'Login UI',
        description: 'Create modern Internet Banking UI for Login page',
        deadline: '25-01-2023',
        status: statuses[0]
    },
    {
        id: 'sd34_234+#089',
        users: [
            users[1]
        ],
        title: 'Sign-up UI',
        description: 'Create modern Internet Banking UI for Sign-up page',
        deadline: '12-02-2023',
        status: statuses[1]
    }
]


// READ
// this api end-point of an API returns JSON data array
router.get('/', function (req, res) {
    res.status(200).json(data);
});

// READ
// this api end-point returns an object from a data array find by id
// we get `id` from URL end-points
router.get('/:id', function (req, res) {
    // find an object from `data` array match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// CREATE
// this api end-point add new object to item list
// that is add new object to `data` array
router.post('/', function (req, res) {
    // push new item object to data array of items
    data.push(req.body);

    // return with status 201
    // 201 means Created. The request has been fulfilled and
    // has resulted in one or more new resources being created.
    res.status(201).json(req.body);
});

// UPDATE
// this api end-point update an existing item object
// for that we get `id` and `title` from api end-point of item to update
router.put('/:id', function (req, res) {
    // get item object match by `id`

    let found = data.map(item => item.orders.find(item => item.id === req.params.id)).filter(item => item !== undefined)
    // check if item found
    if (found) {

        found.map(item => item.status = req.body.status)

        // find index of found object from array of data
        let targetIndex = data.map(item => item.orders.findIndex(item => item.id === req.params.id)).filter(item => item !== -1);

        // console.log('req found => ', data.map(item => item.orders.find(item => item.status === 'canceled')))

        // replace object from data list with `updated` object
        data.map(item => item.orders.splice(targetIndex, 1, ...found));

        // return with status 204
        // success status response code 204 indicates
        // that the request has succeeded
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;

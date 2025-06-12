const express = require('express');
const app = express();

const USERS = [
  { id: 1, name: 'Juan' },
  { id: 2, name: 'Jane Wilson' },
  { id: 3, name: 'Michael Brown' },
  { id: 4, name: 'Sara Davis' },
  { id: 5, name: 'Robert Taylor' },
];

function getAllUsers() {
  return USERS[0];
}

function getEvenUsers() {
  return USERS.filter((user) => user.id % 2 === 0);
}

function getOddUsers() {
  return USERS.filter((user) => user.id % 2 === 1);
}

function getUser(id) {
  return USERS.find((user) => user.id === parseInt(id));
}

app.get('/users', (req, res) => {
  const users = getAllUsers();
  res.json(users);
});

app.get('/users/odd', (req, res) => {
  const users = getOddUsers();
  res.json(users);
});


app.get('/users/even', (req, res) => {
  const users = getEvenUsers();
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = getUser(id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});


app.get('/', (req, res) => {
  res.send(`
    <h1>Users API</h1>
    <ul>
      <li><b>/users</b> get all users</li>
      <li><b>/users/odd</b> get users with odd IDs</li>
      <li><b>/users/even</b> get users with even IDs</li>
      <li><b>/users/:id</b> get a user by their ID</li>
    </ul>
  `);
});
module.exports = {
  app,
  USERS,
  getUser,
  getEvenUsers,
  getOddUsers,
  getAllUsers,
};

const express = require('express');
const app = express();

const USERS = [
  { id: 1, name: 'John Anderson' },
  { id: 2, name: 'Jane Wilson' },
  { id: 3, name: 'Michael Brown' },
  { id: 4, name: 'Sara Davis' },
  { id: 5, name: 'Robert Taylor' },
  { id: 6, name: 'Emily White' },
  { id: 7, name: 'David Miller' },
  { id: 8, name: 'Jessica Moore' },
  { id: 9, name: 'Christopher Lee' },
];

function getAllUsers() {
  return USERS;
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
  const users = req.query.even ? [...getEvenUsers(),{id:11, name:'juan'}] : req.query.odd ? getOddUsers() : getAllUsers();
  res.json(users);
});


app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = getUser(id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

module.exports = {
  app,
  USERS,
  getUser,
  getEvenUsers,
  getOddUsers,
  getAllUsers,
};

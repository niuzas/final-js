const express = require('express');
const router = express.Router();

const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} = require('../controllers/Users');

// Defined Api Routes
router.get('/', getUsers);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;



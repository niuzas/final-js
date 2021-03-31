const User = require('../models/User');

const acceptableProperties = ['name', 'age', 'email', 'password'];

// Get Users
const getUsers = async (req, res) => {
  try {
    let Users = await User.find();
    console.log('Users:', Users);
    Users = Users.map((user) => ({
      id: user._id,
      name: user.name,
      breed: user.breed,
      weight: user.weight,
      birthDate: user.birthDate,
    }));
    res.status(200).json(Users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, breed, weight, birthDate } = req.body;
    const user = new User({ name, breed, weight, birthDate });
    await user.save();
    res.status(201).json({
      id: user._id,
      name: user.name,
      weight: user.weight,
      birthDate: user.birthDate,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: 'Error: user not created. Invalid Data' });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) throw new Error();
    res.status(200).json({ message: 'Successfully deleted' });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: `Error: user with id ${id} not found` });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const newUserProperties = req.body;
  try {
    for (const newProp in newUserProperties) {
      if (!acceptableProperties.includes(newProp)) throw new Error('Invalid properties');
    }
    const result = await User.findByIdAndUpdate(id, newUserProperties, { new: true });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({
      message: `Error: user width id ${id} was not updated`,
      purpose: error.message,
    });
  }
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};

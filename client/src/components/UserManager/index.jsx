import React, { Component } from 'react';

import api from '../../api';
import FormCreateUser from '../FormCreateUser';
import Table from '../Table';
import styles from './styles.module.css';

export class UserManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedUserId: null,
      users: [],
      editedUser: {},
    };
  }

  createUser = () => {
    api.postUser(
      this.state.editedUser,
      () =>
        api.getUsers(
          (users) =>
            this.setState({
              users,
              editedUser: {},
            }),
          (error) => console.error(error)
        ),
      (error) => console.error(error)
    );
  };

  saveUser = () => {
    console.log("AM saving user state:",this.state)
    api.updateUser(
      this.state.editedUserId,
      this.state.editedUser,
      () =>
        api.getUsers(
          (users) =>
            this.setState({
              users,
              editedUser: {},
              editedUserId: null,
            }),
          (error) => console.error(error)
        ),
      (error) => console.error(error)
    );
  };

  deleteUser = (id) => {
    api.deleteUser(
      id,
      () =>
        api.getUsers(
          (users) => this.setState({ users }),
          (error) => console.error(error)
        ),
      (error) => console.error(error)
    );
  };

  editUser = (id) => {
    let newState = {
      editedUserId: this.state.editedUserId,
      editedUser: this.state.editedUser,
    };
    if (id === this.state.editedUserId) {
      newState.editedUserId = null;
      newState.editedUser = {};
    } else {
      newState.editedUserId = id;
      const editedUser = { ...this.state.users.find((user) => user.id === id) };
      delete editedUser.id;
      newState.editedUser = editedUser;
    }
    this.setState(newState);
  };

  updateEditedUser = (editedInput) => {
    this.setState({
      editedUser: {
        ...this.state.editedUser,
        ...editedInput,
      },
    });
  };

  componentDidMount() {
    api.getUsers(
      (data) => {
        console.log('AM CDM data:', data);
        return this.setState({ users: data });
      },
      (error) => console.error(error)
    );
    console.log('UM mounted');
  }

  render() {
    const { users, editedUserId, editedUser } = this.state;
    const isUpdating = Boolean(editedUserId);
    console.log('UM rendered, data:', users);

    return (
      <div className={styles.UserManagerGrid}>
        <FormCreateUser
          handleSubmit={isUpdating ? this.saveUser : this.createUser}
          isUpdating={isUpdating}
          handleInputChange={this.updateEditedUser}
          inputData={editedUser}
        />
        <Table title="Esami Vartotojai" data={users} deleteEntity={this.deleteUser} updateEntity={this.editUser} />
      </div>
    );
  }
}

export default UserManager;

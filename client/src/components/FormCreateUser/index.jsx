import React from 'react';

import Button from '../Button';
import FormGroup from '../FormGroup';
import styles from './styles.module.css';
import LANG from '../../translations/LANG'

class FormCreateUser extends React.Component {

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    const actionTitle = (this.props.isUpdating ? LANG.createuser : LANG.updateuser);
    return (
      <form className={styles.FormCreate} onSubmit={this.handleFormSubmit}>
        <h2>{actionTitle}</h2>
        <div className={styles.FormGroupContainer}>
          <FormGroup
            name={LANG.name}
            type="text"
            value={this.props.inputData.name ?? ''}
            handleChange={(value) => this.props.handleInputChange({ name: value })}
          />
          <FormGroup
            name={LANG.age}
            type="number"
            value={this.props.inputData.age ?? ''}
            handleChange={(value) => this.props.handleInputChange({ age: value })}
          />
          <FormGroup
            name={LANG.email}
            type="text"
            value={this.props.inputData.email ?? ''}
            handleChange={(value) => this.props.handleInputChange({ email: value })}
          />
          <FormGroup
            name={LANG.password}
            type="password"
            value={this.props.inputData.password ?? ''}
            handleChange={(value) => this.props.handleInputChange({ password: value })}
          />
          <Button>{actionTitle}</Button>
        </div>
      </form>
    )
  }
}

export default FormCreateUser;
import React from 'react';
import styles from './styles.module.css';
import { v4 as generateUniqId } from 'uuid';

class FormGroup extends React.Component {
  state = {
    hash: generateUniqId()
  };

  createOptions = (options) => 
  [
    <option disabled="disabled" value={''} key={generateUniqId()}>Select...</option>,  
    ...options.map(({ id, title }) =><option key={id} value={id}>{title}</option>)
  ];

  render() {
    const { name, value, type = 'text', options = false } = this.props;
    const nameUpper = name[0].toUpperCase() + name.slice(1);
    const hashedName = `${this.state.hash}_${name}`
    return (
      <div className={styles.FormGroup}>
        <label htmlFor={hashedName}>{nameUpper}</label>
        {
          options && type === 'select' ?
            <select
              name={name}
              id={hashedName}
              value={value}
              onChange={(e) => this.props.handleChange(e.target.value)}
            >
              {this.createOptions(options)}
            </select> :
            <input
              type={type}
              name={name}
              value={value}
              id={hashedName}
              onChange={(e) => this.props.handleChange(e.target.value)}
            />
        }
      </div>
    )
  }
}

export default FormGroup;

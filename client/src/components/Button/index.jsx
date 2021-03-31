import React from 'react';
import styles from './styles.module.css';

class Button extends React.Component {
  render() {
    return (
      <button className={styles.Button}>
        {this.props.children}
      </button>
    )
  }
}

export default Button

import React from 'react';
import styles from './styles.module.css';

class TableRow extends React.Component {

  createCols = () => this.props.header ?
    this.props.cols.map((colName, i) => <th key={i}>{colName}</th>) :
    [
      ...this.props.cols.map((colName, i) => <td key={i}>{colName}</td>),
      <td key={this.props.cols.length}>
        <button onClick={this.props.updateEntity}>✎</button>
        <button onClick={this.props.deleteEntity}>✕</button>
      </td>
    ]

  render() {
    const className = this.props.header ? `${styles.Row} ${styles.Header}` : styles.Row;
    const cols = this.createCols();
    return <tr className={className}>{cols}</tr>;
  }
}

export default TableRow;

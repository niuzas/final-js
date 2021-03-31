import React from "react";


import TableRow from "./TableRow";
import styles from './styles.module.css';

class Table extends React.Component {

  createColNames = () => {
    return this.props.data.reduce((allCols, ob) => {
      for (const key in ob) {
        if (!allCols.includes(key))
          allCols.push(key);
      }
      return allCols;
    }, [])
  }

  createHeader = (colNames) => {      
    const headers = colNames
      .filter(col => col !== 'id')
      .map(col => col[0].toUpperCase() + col.slice(1));
    headers.splice(headers.length, 0, 'Actions');
    return <TableRow cols={headers} header={true} />
  }

  createDataRows = (colNames) => {
    const tableRowsData = this.props.data.map(ob => {
      if (ob.id === undefined)
        throw new Error('Table props.data array should consist of objects with unique id property');
      const objectForTableRow = {
        id: ob.id,
        cols: []
      };
      colNames.forEach((colName) => {
        if (ob[colName] === undefined) {
          objectForTableRow.cols.push('---');
        } else if (colName !== 'id') {
          objectForTableRow.cols.push(ob[colName])
        }
      })
      return objectForTableRow;
    });
    const tableRows = tableRowsData.map(({ id, cols }) =>
      <TableRow
        key={id}
        deleteEntity={() => this.props.deleteEntity(id)}
        updateEntity={() => this.props.updateEntity(id)}
        cols={cols}
      />
    );
    return tableRows;
  }


  render() {
    const dataExists = this.props.data.length > 0;
    let colNames, dataRows;
    if (dataExists) {
      colNames = this.createColNames();
      dataRows = this.createDataRows(colNames);
    }

    return (
      <div>
        <h2>{this.props.title} {!dataExists ? '- no data' : null}</h2>
        {
          dataExists ?
            <table className={styles.Table}>
              <thead>{this.createHeader(colNames)}</thead>
              <tbody>{dataRows}</tbody>
            </table> :
            null
        }
      </div>
    );
  }
}

export default Table;
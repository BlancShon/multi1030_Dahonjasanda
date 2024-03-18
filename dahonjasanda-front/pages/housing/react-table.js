//import { useTable } from 'react-table';
import React from 'react';

const Table = ({ titles, columns, data }) => {
    return (
        <table style={{ borderCollapse: 'collapse', width: '100%', marginLeft: '20px' }}>
        <thead>
        {titles.map((title, index) => (
            <tr key={index}>
            <td>{title}</td>
        </tr>
        ))}
            
        </thead>
        <tbody>
        {columns.map((column, index) => (
          
          <tr key={index}>
            <td>{column.Header}</td>
            <td colSpan="2">{data[index][column.accessor]}</td>
          </tr>
        ))}
      </tbody>
        
      </table>
    );
  };

  console.log(Table);
 
  export default Table;
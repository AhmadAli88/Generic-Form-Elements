import React from 'react';
import Table from 'react-bootstrap/Table';

function GenericTable({ columns, data, striped = false, bordered = false, hover = false }) {
  return (
    <Table striped={striped} bordered={bordered} hover={hover}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} colSpan={cell.colSpan || 1}>
                {cell.content}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default GenericTable;

import React from 'react';
import * as styles from './EmployeeRow.module.css';

export const EmployeeRow = ({ employee }) => {
  return (
    <tr className={styles.tr}>
      <td className={styles.employeeName}>{employee.name}</td>
      {Object.keys(employee.schedule).map(k => (
        <td className={styles.td} key={k}>{`${employee.schedule[k].hours}${
          employee.schedule[k].assignment
            ? ', ' + employee.schedule[k].assignment
            : ''
        }`}</td>
      ))}
    </tr>
  );
};

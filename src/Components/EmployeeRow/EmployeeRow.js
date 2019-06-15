import React from 'react';
import * as styles from './EmployeeRow.module.css';

export default function EmployeeRow({ employee }) {
  return (
    <tr className={styles.tr}>
      <td className={styles.employeeName}>{employee.name}</td>
      {Object.keys(employee.schedule).map(e => (
        <td className={styles.td} key={e}>{`${
          employee.schedule[e].start.value
            ? employee.schedule[e].assignment.value === 'OFF'
              ? ''
              : employee.schedule[e].start.value +
                ' - ' +
                employee.schedule[e].end.value +
                ', '
            : ''
        }${employee.schedule[e].assignment.value}`}</td>
      ))}
    </tr>
  );
}

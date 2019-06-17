import React from 'react';
import * as styles from './EmployeeRow.module.css';

const EmployeeRow = ({ employee }) => {
  const getBgColor = assignment => {
    switch (assignment) {
      case 'Manager': {
        return 'manager';
      }
      case 'Book Desk': {
        return 'bookDesk';
      }
      case 'Project': {
        return 'project';
      }
      case 'Large Order': {
        return 'largeOrder';
      }
      case 'Register': {
        return 'register';
      }
      case 'Greeter': {
        return 'greeter';
      }
      case 'Register/Greeter': {
        return 'registerGreeter';
      }
      case 'Sorter': {
        return 'sorter';
      }
      default: {
        return 'td';
      }
    }
  };

  return (
    <tr className={styles.tr}>
      <td className={styles.employeeName}>{employee.name}</td>
      {Object.keys(employee.schedule).map(d =>
        employee.schedule[d].shift1.value &&
        employee.schedule[d].shift1.value !== 'OFF' &&
        employee.schedule[d].shift2.value &&
        employee.schedule[d].shift2.value !== 'OFF' ? (
          <td className={styles.tdSplit} key={d}>
            <div
              className={[
                styles.splitShift,
                styles[getBgColor(employee.schedule[d].assignment1.value)]
              ].join(' ')}
            >
              {`${employee.schedule[d].shift1.value} ${
                employee.schedule[d].assignment1.value
              }`}
            </div>
            <div
              className={[
                styles.splitShift,
                styles[getBgColor(employee.schedule[d].assignment2.value)]
              ].join(' ')}
            >
              {`${employee.schedule[d].shift2.value} ${
                employee.schedule[d].assignment2.value
              }`}
            </div>
          </td>
        ) : (
          <td
            className={
              employee.schedule[d].shift1.value === 'OFF'
                ? styles.td
                : [
                    styles.td,
                    styles[getBgColor(employee.schedule[d].assignment1.value)]
                  ].join(' ')
            }
            key={d}
          >
            {employee.schedule[d].shift1.value === 'OFF'
              ? 'OFF'
              : `${employee.schedule[d].shift1.value} ${
                  employee.schedule[d].assignment1.value
                }`}
          </td>
        )
      )}
    </tr>
  );
};

export default EmployeeRow;

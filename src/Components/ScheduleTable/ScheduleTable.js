import React, { useState } from 'react';
import * as data from '../../mock_data/employee_schedule.json';
import AddEmployeeForm from '../AddEmployeeForm/AddEmployeeForm';
import EmployeeRow from '../EmployeeRow/EmployeeRow';
import * as styles from './ScheduleTable.module.css';

export const ScheduleTable = () => {
  const [employees, setEmployees] = useState([...data.employees]);

  const addEmployee = newEmployee => {
    const updatedEmployeeList = [...employees, newEmployee];
    setEmployees(updatedEmployeeList);
  };

  return (
    console.log(employees) || (
      <div className={styles.container}>
        <table className={styles.table}>
          <tbody className={styles.tbodyContainer}>
            <tr>
              <th colSpan="8" className={styles.dateHeader}>{`6/17/19`}</th>
            </tr>
            <tr>
              <th className={styles.thEmployee}>{'Employee'}</th>
              <th className={styles.th}>{'Monday'}</th>
              <th className={styles.th}>{'Tuesday'}</th>
              <th className={styles.th}>{'Wednesday'}</th>
              <th className={styles.th}>{'Thursday'}</th>
              <th className={styles.th}>{'Friday'}</th>
              <th className={styles.th}>{'Saturday'}</th>
              <th className={styles.th}>{'Sunday'}</th>
            </tr>
            {employees.map(e => {
              return <EmployeeRow key={e.name} employee={e} />;
            })}
          </tbody>
        </table>
        <div>
          <AddEmployeeForm employees={employees} addEmployee={addEmployee} />
        </div>
      </div>
    )
  );
};

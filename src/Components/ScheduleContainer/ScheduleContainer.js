import React, { useEffect, useState } from 'react';
import { singleEmployee } from '../../initial_state/';
import employeeRepository from '../../repositories/employeeRepository';
import AddEmployeeDropdowns from '../AddEmployeeDropdowns/AddEmployeeDropdowns';
import ScheduleTable from '../ScheduleTable/ScheduleTable';
import * as styles from './ScheduleContainer.module.css';

const ScheduleContainer = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');

  useEffect(() => {
    setLoading(true);
    employeeRepository.getAllEmployees().then(employeeData => {
      setEmployees(employeeData);
      setLoading(false);
    });
  }, []);

  const addEmployee = newEmployee => {
    setLoading(true);
    employeeRepository
      .addEmployee(newEmployee)
      .then(response => {
        setEmployees([...employees, response.employee]);
        setLoading(false);
        doSnackbar(newEmployee.name, 'added');
      })
      .catch(err => console.log(err));
  };

  const deleteEmployee = id => {
    setLoading(true);
    employeeRepository
      .deleteEmployee(id)
      .then(response => {
        setEmployees(employees.filter(e => e._id !== id));
        setLoading(false);
        doSnackbar(response.value.name, 'deleted');
      })
      .catch(err => console.log(err));
  };

  const editEmployee = updatedEmployee => {
    setLoading(true);
    employeeRepository
      .editEmployee(updatedEmployee)
      .then(response => {
        setEmployees(
          employees.map(e => {
            if (e._id === response.value._id) {
              return response.value;
            }
            return e;
          })
        );
        setLoading(false);
        doSnackbar(updatedEmployee.name, 'updated');
      })
      .catch(err => console.log(err));
  };

  const doSnackbar = (name, action) => {
    setSnackMessage(`${name} has been ${action}.`);
    const snackbar = document.getElementById('snackbar');
    snackbar.className = [styles.snackbar, styles.snackbarShow].join(' ');
    setTimeout(() => {
      snackbar.className = styles.snackbar;
    }, 3000);
  };

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <h3>Updating...</h3>
        </div>
      ) : (
        <ScheduleTable
          employees={employees}
          deleteEmployee={deleteEmployee}
          editEmployee={editEmployee}
        />
      )}
      <AddEmployeeDropdowns
        addEmployee={addEmployee}
        newEmployee={singleEmployee}
      />
      <div id="snackbar" className={styles.snackbar}>
        {snackMessage}
      </div>
    </div>
  );
};

export default ScheduleContainer;

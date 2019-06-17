import React, { useState } from 'react';
import { singleEmployee } from '../../initial_state/';
import AddEmployeeShifts from '../AddEmployeeShifts/AddEmployeeShifts';
import * as styles from './AddEmployeeForm.module.css';

const AddEmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState(singleEmployee.name);
  const [schedule, setSchedule] = useState(singleEmployee.schedule);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleScheduleChange = newSchedule => {
    addEmployee({ name: name, schedule: newSchedule });
    initializeState();
    document.getElementById('add-employee-form').reset();
  };

  const initializeState = () => {
    setName(singleEmployee.name);
    setSchedule(singleEmployee.schedule);
  };

  return (
    <div className={styles.formBorder}>
      <h3>Add a new employee</h3>
      <form id="add-employee-form">
        <label>{'Employee Name: '}</label>
        <input type="text" value={name} onChange={handleNameChange} required />
        <br />
        <AddEmployeeShifts
          schedule={schedule}
          scheduleChange={handleScheduleChange}
        />
      </form>
    </div>
  );
};

export default AddEmployeeForm;
